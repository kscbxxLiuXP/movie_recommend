import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { Component } from 'react'

import im1 from '../../assets/img/im1.png'
import im2 from '../../assets/img/im2.png'
import im3 from '../../assets/img/im3.png'
import im4 from '../../assets/img/im4.png'
import im5 from '../../assets/img/im5.png'
import im6 from '../../assets/img/im6.png'
import im7 from '../../assets/img/im7.png'
import im8 from '../../assets/img/im8.png'
export default class MyCarousel extends Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            slides: [

                (<img src={im1} width="100%" height={700} alt="im1" />),
                (<img src={im2} width="100%" height={700}  alt="im2" />),
                (<img src={im3} width="100%" height={700}  alt="im3" />),
                (<img src={im4} width="100%" height={700}  alt="im4" />),
                (<img src={im5} width="100%" height={700}  alt="im5" />),
                (<img src={im6} width="100%" height={700}  alt="im6" />),
                (<img src={im7} width="100%" height={700}  alt="im7" />),
                (<img src={im8} width="100%" height={700}  alt="im8" />),
            ],
        }
        this.onchange = this.onchange.bind(this);
    }


    onchange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <Carousel
                    value={this.state.value}
                    slides={this.state.slides}
                    onChange={this.onchange}
                    plugins={[
                        'infinite',
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 2000,
                            }
                        },
                    ]}
                    animationSpeed={1000}
                />
                <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
            </div>
        );
    }
}