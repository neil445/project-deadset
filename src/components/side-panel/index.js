import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const SidePanel = () => (
	<div class={style.sidePanel}>
		<div>
			<div class={style.image} />
			<Link href="/"><h1>Neil Aldrin Santos</h1></Link>
			<p>Software developer by trade.</p>	
		</div>
		<div>
		<nav >
			<Link activeClassName={style.active} href="/blogs">Blogs</Link>
			<Link activeClassName={style.active} href="/contact">Contact me</Link>
		</nav>
		</div>
	</div>
);

export default SidePanel;
