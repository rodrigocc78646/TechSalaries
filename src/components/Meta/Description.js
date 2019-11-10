import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { mean as d3mean, extent as d3extent, deviation as d3deviation } from 'd3-array';

import USStatesMap from './USStatesMap';

class Description extends Component {

    allDataForYear(year, data = this.props.allData) {
        return data.filter(d => d.submit_date.getFullYear() === year);
    }

    allDataForJobTitle(jobTitle, data = this.props.allData) {
        return data.filter(d => d.clean_job_title === jobTitle);
    }

    allDataForUSstate(USstate, data = this.props.allData) {
        return data.filter(d => d.USstate === USstate);
    }

    get yearsFragment() {
        const year = this.props.filteredBy.year;

        return year === '*' ? "" : `In ${year}`;
    }

    get USstateFragment() {
        const USstate = this.props.filteredBy.USstate;

        return USstate === '*' ? "" : USStatesMap[USstate.toUpperCase()];
    }

    get previousYearFragment() {
        const year = this.props.filteredBy.year;

        let fragment;

        if (year === '*') {
            fragment = "";
        } else if (year === 2012) {
            fragment = "";
        } else {
            const { USstate, jobTitle } = this.props.filteredBy;
            let lastYear = this.allDataForYear(year - 1);


            if (jobTitle !== '*') {
                lastYear = this.allDataForJobTitle(jobTitle, lastYear);
            }

            if (USstate !== '*') {
                lastYear = this.allDataForUSstate(USstate, lastYear);
            }

            if (this.props.data.length / lastYear.length > 2) {
                fragment = ", " + (this.props.data.length / lastYear.length).toFixed() + " times more than the year before";
            } else {
                const percent = ((1 - lastYear.length / this.props.data.length) * 100).toFixed();

                fragment = ", " + Math.abs(percent) + "% " + (percent > 0 ? "more" : "less") + " than the year before";
            }
        }

        return fragment;
    }

    get jobTitleFragment() {
        const jobTitle = this.props.filteredBy.jobTitle;
        let fragment;

        if (jobTitle === '*') {
            fragment = "H1B work visas";
        } else {
            if (jobTitle === "other") {
                fragment = "H1B work visas";
            } else {
                fragment = `H1B work visas for software ${jobTitle}s`;
            }
        }

        return fragment;
    }

    get format() {
        return scaleLinear()
            .domain(d3extent(this.props.data, d => d.base_salary))
            .tickFormat();
    }


    render() {
        const format = this.format,
            mean = d3mean(this.props.data, d => d.base_salary),
            deviation = d3deviation(this.props.data, d => d.base_salary);

        return (
            <p className="lead">
                {this.yearsFragment ? this.yearsFragment : "Since 2012"} the {this.UStateFragment} tech industry {this.yearsFragment ? "sponsored" : "has sponsored"} <b>{format(this.props.data.length)} {this.jobTitleFragment}</b>{this.previousYearFragment}. Most of them paid <b>${format(mean - deviation)} to ${format(mean + deviation)}</b> per year.
            </p>
        );
    }
}

export default Description;