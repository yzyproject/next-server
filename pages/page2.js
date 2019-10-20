import Router from 'next/router'
import Link from 'next/link'
import { withRouter} from 'next/router';
const page1 = ({router})=>{
    return (
        <span>
        <div className="p1">第一个页面</div>
        <Link href="/"><a>首页</a></Link>
        <Link href="/page1"><a>page1{router.query.name}</a></Link>
    </span>
    );
}
export default withRouter(page1);