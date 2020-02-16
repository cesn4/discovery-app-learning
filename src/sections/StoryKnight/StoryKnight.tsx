import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Video from '~/components/Video';
import Article from '~/components/Article';
import AuthorPost from '~/components/AuthorPost';

import AuthorPhoto from '~/assets/img/author.jpg';
import './StoryKNight.scss';

const StoryKnight: FunctionComponent = () => {
    const className = 'story-knight';
    return (
        <div className={className}>
            <Container>
                <div className={`${className}__box`}>
                    <Row>
                        <Col xs={12} md={12} lg={6}>
                            <div className={`${className}__article`}>
                                <Article
                                    title="Quisque viverra interdum velit?"
                                    content="Culpa qui officia deserunt mollit anim id esto polujimi laborum. Sed ut perspiciatis unde omnis iste eropluk onatuspop error sit voluptartem accusantium wetrop doloremque laudantium, totam rem aperiam, eaquep ipsa quaeer ab illo inventore veritatisy et quasi weth ropeior architecto beatae vitae dicta sunt explicapbo. Nemo popul eniem ipsam yui voluptatem quialoperyi voluptas sit aspernatur aute odit aut fugit, sed quiawi consequuntur joki erty magni dolores eosep quiklopii ratione wertyuil voluptatem sequi nesciunt. Nequeop porro polu quisquam est, quepi dolorem ipsum quiat lopi dolor srit amet, consectetur adipisci velit, topitop seid quia non numquam eiuris modij tempora poluko incidunt ut labore et dolore magnam aliquam mokeru quaerat iope voluptatem.
                                    Lorem ipsum dolor sit amet, consectetur holukoro on adipisifwcing elit, sed do eiusmod tempor incididunte utopi labore et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis nostruklad exercitation eropileri ullamco laboris nisi ut aliquip ex ea commodo wopun consequat. Duis aute irure dolor in reprehenderit inie tufpoy voluptate velit esse cillum dolore eu fugiat holi nulla parieratur. Excepteur sint occaecat ropukuli uki cupidatat."
                                />
                            </div>
                        </Col>
                        <div className={`${className}__separator`}>&nbsp;</div>
                        <Col xs={12} md={12} lg={6}>
                            <div className={`${className}__author-posts`}>
                                <AuthorPost
                                    name="Jonathan Walker"
                                    post="In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan…"
                                    time="2m ago"
                                    image={AuthorPhoto}
                                />
                            </div>
                            <div className={`${className}__author-posts`}>
                                <AuthorPost
                                    name="Brenda Mercer"
                                    post="Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretim…"
                                    time="2m ago"
                                    image={AuthorPhoto}
                                />
                            </div>
                            <div className={`${className}__video`}>
                                <Video url="https://www.youtube.com/watch?v=6lt2JfJdGSY" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default StoryKnight;
