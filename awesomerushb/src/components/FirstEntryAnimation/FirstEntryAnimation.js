import Texty from 'rc-texty';
import './firstEntryAnimation.css';
import TweenOne from 'rc-tween-one';
import { Button, Dialog } from '@material-ui/core';
import React, { useEffect, useState } from 'react';


/**
 * @description 第一次进入时动画
 *
 * @export
 * @param {*} props
 * @return {*} 
 */
export default function FirstEntryAnimation(props) {

    const [show, setShow] = useState(true);

    function geInterval(e) {
        switch (e.index) {
            case 0:
                return 0;
            case 1:
                return 150;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return 150 + 450 + (e.index - 2) * 10;
            default:
                return 150 + 450 + (e.index - 6) * 150;
        }
    }

    function getEnter(e) {
        const t = {
            opacity: 0,
            scale: 0.8,
            y: '-100%',
        };
        if (e.index >= 2 && e.index <= 6) {
            return { ...t, y: '-30%', duration: 150 };
        }
        return t;
    }

    function getSplit(e) {
        const t = e.split(' ');
        const c = [];
        t.forEach((str, i) => {
            c.push((
                <span key={`${str}-${i}`}>
                    {str}
                </span>
            ));
            if (i < t.length - 1) {
                c.push(<span key={` -${i}`}> </span>);
            }
        });
        return c;
    }

    // function onClick() {
    //     this.setState({
    //         show: false,
    //     }, () => {
    //         this.setState({
    //             show: true
    //         });
    //     });
    // }

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 4000)

    })

    return (
        <React.Fragment>
            
            <Dialog
                fullScreen
                open={show}
            >
                <div className="combined-wrapper">
                    {show && (
                        <div className="combined">
                            <div className="combined-shape">
                                <div className="shape-left">
                                    <TweenOne
                                        animation={[
                                            { x: 200, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                                            { x: -200, ease: 'easeInOutQuart', duration: 600, delay: -150 },
                                        ]}
                                    />
                                </div>
                                <div className="shape-right">
                                    <TweenOne
                                        animation={[
                                            { x: -200, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                                            { x: 200, ease: 'easeInOutQuart', duration: 600, delay: -150 },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="title-box">
                                <Texty
                                    className="title"
                                    type="mask-top"
                                    delay={400}
                                    enter={getEnter}
                                    interval={geInterval}
                                    component={TweenOne}
                                    componentProps={{
                                        animation: [
                                            { x: 130, type: 'set' },
                                            { x: 100, delay: 500, duration: 450 },
                                            {
                                                ease: 'easeOutQuart',
                                                duration: 300,
                                                x: 0,
                                            },
                                            {
                                                letterSpacing: 0,
                                                delay: -300,
                                                scale: 0.9,
                                                ease: 'easeInOutQuint',
                                                duration: 1000,
                                            },
                                            { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
                                        ],
                                    }}
                                >
                                    Awe! Some Blog?
                            </Texty>
                            </div>

                            <TweenOne
                                className="combined-bar"
                                animation={{ delay: 2000, width: 0, x: 200, type: 'from', ease: 'easeInOutExpo' }}
                            />
                            <Texty
                                className="content"
                                type="bottom"
                                split={getSplit}
                                delay={2200}
                                interval={30}
                            >
                                ☕️   Passionately powered by Brickea, Mark, and Jonah 🍻
                            </Texty>
                        </div>
                    )}
                </div>
            </Dialog>

        </React.Fragment>

    )
}

// export default class Demo extends React.Component {
//   state = {
//     show: true,
//   }
//   geInterval = (e) => {
//     switch (e.index) {
//       case 0:
//         return 0;
//       case 1:
//         return 150;
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 6:
//         return 150 + 450 + (e.index - 2) * 10;
//       default:
//         return 150 + 450 + (e.index - 6) * 150;
//     }
//   }
//   getEnter = (e) => {
//     const t = {
//       opacity: 0,
//       scale: 0.8,
//       y: '-100%',
//     };
//     if (e.index >= 2 && e.index <= 6) {
//       return { ...t, y: '-30%', duration: 150 };
//     }
//     return t;
//   }

//   getSplit = (e) => {
//     const t = e.split(' ');
//     const c = [];
//     t.forEach((str, i) => {
//       c.push((
//         <span key={`${str}-${i}`}>
//           {str}
//         </span>
//       ));
//       if (i < t.length - 1) {
//         c.push(<span key={` -${i}`}> </span>);
//       }
//     });
//     return c;
//   }

//   onClick = () => {
//     this.setState({
//       show: false,
//     }, () => {
//       this.setState({
//         show: true
//       });
//     });
//   }
//   render() {
//     return (
//       <div className="combined-wrapper">
//         <div className="combined-reload">
//           <Button shape="circle" icon="reload" onClick={this.onClick} />
//         </div>
//         {this.state.show && (
//           <div className="combined">
//             <div className="combined-shape">
//               <div className="shape-left">
//                 <TweenOne
//                   animation={[
//                     { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
//                     { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
//                   ]}
//                 />
//               </div>
//               <div className="shape-right">
//                 <TweenOne
//                   animation={[
//                     { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
//                     { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
//                   ]}
//                 />
//               </div>
//             </div>
//             <Texty
//               className="title"
//               type="mask-top"
//               delay={400}
//               enter={this.getEnter}
//               interval={this.geInterval}
//               component={TweenOne}
//               componentProps={{
//                 animation: [
//                   { x: 130, type: 'set' },
//                   { x: 100, delay: 500, duration: 450 },
//                   {
//                     ease: 'easeOutQuart',
//                     duration: 300,
//                     x: 0,
//                   },
//                   {
//                     letterSpacing: 0,
//                     delay: -300,
//                     scale: 0.9,
//                     ease: 'easeInOutQuint',
//                     duration: 1000,
//                   },
//                   { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
//                 ],
//               }}
//             >
//               Ant Motion
//             </Texty>
//             <TweenOne
//               className="combined-bar"
//               animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
//             />
//             <Texty
//               className="content"
//               type="bottom"
//               split={this.getSplit}
//               delay={2200}
//               interval={30}
//             >
//               Animation specification and components of Ant Design.
//             </Texty>
//           </div>
//         )}
//       </div>
//     );
//   }
// }