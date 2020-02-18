# Discovery learning APP
This repository contains `react` front-end app.

# Structure
/assets : contains images used for app;
/components  : representational UI components only;
/config :  configuration used for project;
/declaration : project global typescript declarations;
/sections : pieces of the pages made from components;
/sytles : contains reset, colours, sizes, fonts, spacing, global project syles and other variables used in project;
/views : pages of the app made from sections that correspond with the url route.

# Run the project
open `discovery-app-learning` folder `npm install` then `npm run dev` for development and `npm run build` for deployment.

# Testing
### Backstop
[BackstopJS](https://github.com/garris/BackstopJS) will assist you with visual regression, on push to origin it will show you what changed since last push, and will help you identify if all changes were intentional. In order for this to work this is how you have to use it:
1. On creating a new branch make sure the project is running `npm run dev` then run `npm run backstop:reference` - this will make a snapshot of the page before changes.
2. When you are happy with the changes and push it to origin, it will automatically run `npm run backstop:test` and shortly after you should get a visual output in the browser, showing you what changed. NOTE: it will not push to origin if there are differences!(see next step how to fix).
3. If you see that everything changed that you wanted to, run `npm run backstop:approve` and then try to push it again, it should push properly and give you a 0 fail visual output.

### Unit Tests
[Jest](https://jestjs.io/en/) is used as a primary testing engine. [Enzyme](https://airbnb.io/enzyme/) is also added as testing extension, and will be mosty used for its `import { shallow } from 'enzyme';` module to render react components.

#### Writing tests:
1. Inside the folder of `/component` | `/container` | `/view` create a directory `__tests__` and inside of it create a test file containing the name of the component `ComponentName.test.tsx`;
2. Inside that fille eg.:
```
import React from 'react';
import { shallow } from 'enzyme';
import SmallCard, { SmallCardProps } from '../SmallCard';

const happyProps: SmallCardProps = {
    firstItem: false,
};

describe('SmallCard component', () => {
    it('Should not have firstItem', () => {
        const wrapper = shallow(<SmallCard {...happyProps} />);
        expect(wrapper.find('.small-card').hasClass('-firstItem')).toBeFalsy();
    });
});
```
