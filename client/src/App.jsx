import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelListContainer, ChannelContainer} from './components'

import './App.css'


const apiKey = '4g67s5jy6yen';

const client = StreamChat.getInstance(apiKey);

function App() {
	return (
		<div className='app__wrapper'>
			<Chat client={client} theme="team light">
				<ChannelListContainer />
				<ChannelContainer />
			</Chat>
		</div>
	);
}

export default App;
