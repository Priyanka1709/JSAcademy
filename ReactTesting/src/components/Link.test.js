import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', ()=> {
    const comp= renderer.create(
         <Link page="http://www.facebook.com">Facebook</Link>
    );

    let tree= comp.toJSON();
    console.log("priyanka",tree);
    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter();

    tree=comp.toJSON();

    expect(tree).toMatchSnapshot();

    expect(tree).toMatchSnapshot();
});