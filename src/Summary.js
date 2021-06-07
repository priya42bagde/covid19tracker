import React from 'react'

class Summary extends React.Component {

    render(){
        const {summary, currentDate} = this.props;
    return (
        <div className="row">
            <div className="NewConfirmed">
                <h3>New Confirmed</h3>
                <h1>{summary.NewConfirmed}</h1>
                <h4>{new Date (currentDate).toDateString()}</h4>
            </div>
            <div className="TotalConfirmed">
                <h4>Total Confirmed</h4>
                <h1>{summary.TotalConfirmed}</h1>
                <h4>{new Date (currentDate).toDateString()}</h4>
            </div>
            <div className="NewDeath">
                <h4>New Deaths</h4>
                <h1>{summary.NewDeaths}</h1>
                <h4>{new Date (currentDate).toDateString()}</h4>
            </div>
            <div className="TotalDeaths">
                <h4>Total Deaths</h4>
                <h1>{summary.TotalDeaths}</h1>
                <h4>{new Date (currentDate).toDateString()}</h4>
            </div>
            <div className="TotalRecovered">
                <h4>New Recovered</h4>
                <h1>{summary.NewRecovered}</h1>
                <h4>{new Date (currentDate).toDateString()}</h4>
            </div>

        </div>
    )}
}

export default Summary
