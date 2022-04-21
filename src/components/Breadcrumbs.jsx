import { Link, useLocation } from 'react-router-dom';
import { capitalise } from '../utils/helpers';

    const Breadcrumbs = () => {

    const location = useLocation();
    const crumbs = location.pathname.split("/").slice(1);

    return <nav id="breadcrumbs">
        <p><Link to="/">Home</Link></p>
        {crumbs.map((crumb) => {
            return <p key={crumb}> &gt; <Link to={"/" + crumb}>{capitalise(crumb)}</Link></p>
        })}
    </nav>;
}

export default Breadcrumbs;