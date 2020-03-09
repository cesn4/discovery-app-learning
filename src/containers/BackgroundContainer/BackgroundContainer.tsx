// import React, { FunctionComponent, Fragment } from 'react';
// import { connect } from 'react-redux';
// import { fetchHeroBackground } from '~/utils';

// import Background from '~/components/Background';

// fetchHeroBackground();

// const BackgroundCaontainer: FunctionComponent<MappedProps> = ({
//     heroBackground,
// }: MappedProps) => {
//     const myObj = heroBackground[0];
//     if (myObj) {
//         console.log(myObj.title);
//     }
//     // let backgroundTitle = [''];
//     // let backgroundSubtitle = [''];
//     // let backgroundParagraph = [''];
//     // if (heroBackground) {
//     //     backgroundTitle = Object.keys(heroBackground[0].title);
//     //     backgroundSubtitle = Object.keys(heroBackground[0].subtitle);
//     //     backgroundParagraph = Object.keys(heroBackground[0].paragraph);
//     // }
//     return (
//         <Fragment>
//             <Background title="title" subtitle="subtitle" paragraph="para" />
//         </Fragment>
//     );
// };

// const mapStateToProps = (state: ApplicationState): MappedProps => {
//     return {
//         heroBackground: state.heroBackground,
//     };
// };

// interface ApplicationState {
//     heroBackground: Array<HeroBackgroundItems>;
// }

// interface MappedProps {
//     heroBackground: Array<HeroBackgroundItems>;
// }

// interface HeroBackgroundItems {
//     title: string;
//     subtitle: string;
//     paragraph: string;
// }
// export default connect(mapStateToProps)(BackgroundCaontainer);
