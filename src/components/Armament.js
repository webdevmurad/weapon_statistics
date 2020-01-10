import React from 'react'; 
import {Chart} from 'react-google-charts';





class Armament extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <div>
                {!data ? (
                    <h2 className="head-armament">Выберите раздел</h2>                  
                    ) : (
                        <Chart
                            className="map"
                            chartType="GeoChart"
                            width="100%"
                            height="400px"
                            data={data}
                        />
                    )
                }
            </div>
        )
    }
}

export default Armament;