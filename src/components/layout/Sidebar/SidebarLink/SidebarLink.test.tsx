import React from 'react';
import { render, screen } from '@testing-library/react';
import SidebarLink from "./SidebarLink";

jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: () => (<div>icon-stub</div>)
}));

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/records",
            pathname: "",
            query: "",
            asPath: "",
        };
    },
}));

describe('SidebarLink', () =>{
    test('displays passed default slot', () => {
        render(<SidebarLink link="">My Link</SidebarLink>);
        const link = screen.getByText(/My Link/i);
        expect(link).toBeInTheDocument();
    });

     test('crates Next.js link by passed link', () => {
         render(<SidebarLink link="/record">Link</SidebarLink>);

         const link = screen.getByText(/Link/i);
         expect(link).toHaveAttribute('href', '/record');
     });

    test('adds icon if icon prop passed ', () => {
        render(<SidebarLink link="" icon="coffee">My Link</SidebarLink>);

        const iconStub = screen.getByText(/icon-stub/i);
        expect(iconStub).toBeInTheDocument();
    });

    test('set active class if route is right', () => {
        render(<SidebarLink link="/records" icon="coffee">My Link</SidebarLink>);

        const link = screen.getByText(/My Link/i);
        expect(link.className).toContain('active');
    });
})

