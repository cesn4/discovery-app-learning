import React, { FunctionComponent, Fragment } from 'react';

import Paragraph from '~/components/Paragraph';

import Elephant from '~/assets/img/elephant.jpg';

const DiscoveryParagraph: FunctionComponent = () => {
    return (
        <Fragment>
            <Paragraph
                image={Elephant}
                paragraph="  Lorem ipsum dolor sit amet consectetur adipiscing
                            elit sodales primis, mollis viverra conubia ligula
                            inceptos laoreet libero tortor, nascetur non
                            habitasse iaculis tempor nec egestas fames augue,
                            platea porta integer nostra curae sed arcu. Nec ut
                            diam vulputate ante scelerisque ridiculus lobortis
                            orci mi curae himenaeos quis, senectus curabitur
                            ullamcorper a porttitor nibh fermentum nisi cum
                            morbi aliquam. Vitae pretium vestibulum dui gravida
                            in potenti interdum, class rhoncus neque eget magna
                            at Ullamcorper porttitor non pharetra cursus nisl
                            mollis pellentesque primis penatibus platea, dictum
                            himenaeos eget mi bibendum ad molestie aliquet curae
                            quis quisque, nunc duis ac at elementum dui integer
                            viverra tempus. Lacinia bibendum diam senectus
                            egestas nec molestie convallis aenean hac tempus,
                            vivamus purus congue euismod fringilla cursus donec
                            est eu blandit platea, feugiat vitae netus orci
                            habitant accumsan placerat morbi nostra."
                comment="In hac habitasse platea dictumst. Sed nec venenatis
                            odio. Nulla faucibus ipsum sed faucibus accumsan.
                            Donec rhoncus luctus."
            />
        </Fragment>
    );
};

export default DiscoveryParagraph;
