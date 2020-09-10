import { h } from 'preact';
import style from './style';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Contact me</h1>
			<div>
					<div>If you have work or opportunity for me, feel free to reach me through these channels:</div>
					<div>+639959900165</div>
					<div>nas.secured@gmail.com</div>
					<div>likedIn</div>
					<div></div>
					<div>&nbsp;</div>
					<div>If you're shy for a phone call or not in the mood to use e-mail, feel free to use the form below.</div>
					<div class={style.formWrapper}>
						<form name="contact" method="POST" data-netlify="true" action="/contact/success" data-netlify-honeypot="bot-field">
							<input type="hidden" name="form-name" value="contact" />
							<p>
								<input type="text" name="name" placeholder="Name" required />
							</p>
							<p>
								<input type="email" name="email" placeholder="E-Mail" required />
							</p>
							<p>
								<textarea name="message" placeholder="Message" />
							</p>
							<p>
								<button type="submit">Send</button>
							</p>
						</form>		
					</div>
				<div>Cheers 🍻</div>
			</div>
		</div>
	);
};

export default photographs;
