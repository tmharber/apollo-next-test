import React, { Fragment } from 'react';
import Link from 'next/link';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroId: '1',
            heroRole: 'Attack'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(stateField) {
        return (e) => {
            const obj = {};
            obj[stateField] = e.target.value;
            this.setState(obj);
        };
    }

    render() {
        return (
            <Fragment>
                <div>
                    <span>Select hero:</span>
                    <select value={this.state.heroId} onChange={this.handleChange('heroId')}>
                        <option value="1">Junkrat</option>
                        <option value="2">Soldier 76</option>
                        <option value="3">Widowmaker</option>
                    </select>
                    {/* <Link href={`/hero?heroId=${this.state.heroId}`} as={`/hero/${this.state.heroId}`}> */}
                    <Link href={{ pathname: '/hero', query: { heroId: this.state.heroId } }} as={`/hero/${this.state.heroId}`}>
                        <button type="button" className="btn btn-link">Go to hero</button>
                    </Link>
                </div>

                <div>
                    <span>Select hero role:</span>
                    <select value={this.state.heroRole} onChange={this.handleChange('heroRole')}>
                        <option value="Attack">Attack</option>
                        <option value="Defence">Defence</option>
                    </select>
                    <Link href={{ pathname: '/heroes', query: { heroRole: this.state.heroRole } }} as={`/heroes/${this.state.heroRole}`}>
                        <button type="button" className="btn btn-link">Go to role</button>
                    </Link>
                </div>
            </Fragment>
        );
    }
}

export default Index;
