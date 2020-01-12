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
                        <div>
                            <Chart
                                className="map"
                                chartType="GeoChart"
                                width="100%"
                                height="400px"
                                data={data}
                            />
                            <div className='head-info'>
                                <div>
                                    {data.map((country) => (
                                        <p>{country[0]}</p>
                                    ))}
                                </div>
                                <div>
                                    {data.map((country) => (
                                        <p>{country[1]}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Armament;