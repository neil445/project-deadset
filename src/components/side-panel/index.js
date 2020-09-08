import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const SidePanel = () => (
	<div class={style.sidePanel}>
		<Link href="/"><h1>Neil Aldrin Santos</h1></Link>
		<nav>
			<Link activeClassName={style.active} href="/blogs">Blogs</Link>
			<Link activeClassName={style.active} href="/contact">Contact me</Link>
		</nav>
	</div>
);

export default SidePanel;
