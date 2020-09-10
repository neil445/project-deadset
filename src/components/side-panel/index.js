import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const SidePanel = () => (
	<div class={style.sidePanel}>
		<div class={style.profileBio}>
			<div class={style.image} />
			<Link href="/"><h1>Neil Aldrin Santos</h1></Link>
			<p>Software developer by trade.</p>	
			<div>
				<a target="_blank" href="https://www.linkedin.com/in/neil-aldrin-santos-9a67676b/">
					<i class="fa fa-linkedin-square" aria-hidden="true"></i>
				</a>
				<a target="_blank" href="https://github.com/neil445">
					<i class="fa fa-github" aria-hidden="true"></i>
				</a>
				<a target="_blank" href="https://dev.to/neil445">
					<i class="fa fa-file-text" aria-hidden="true"></i>
				</a>
			</div>
		</div>
		<div>	
			<nav>
				<Link activeClassName={style.active} href="/">About me</Link>
				<Link activeClassName={style.active} href="/blogs">Write ups</Link>
				<Link activeClassName={style.active} href="/contact">Contact me</Link>
				<Link activeClassName={style.active} href="/">Hire me!</Link>
			</nav>
		</div>
	</div>
);

export default SidePanel;
