import BIcon from "@/components/base/BIcon/BIcon";

import {useDispatch, useSelector} from "react-redux";
import {toggleSidebar} from "@/store/slices/layoutSlice"
import {RootState} from "@/store";

const Navbar = () => {

    const dispatch = useDispatch();

    const isCollapsed = useSelector((state: RootState) => state.layout.isCollapsed);

    return (
        <div className={`navbar ${isCollapsed && 'collapsed'}`}>
            <BIcon className="navbar__burger" onClick={() => dispatch(toggleSidebar())} name={'faBars'} />
        </div>
    )
}

export default Navbar
