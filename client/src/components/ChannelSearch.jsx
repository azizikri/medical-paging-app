import { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets';

const ChannelSearch = () => {
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);

	const getChannels = async (text) => {
		try {
			// TODO: fetch Channel
		} catch (error) {
			setQuery('');
		}
	};

	const onSearch = (e) => {
		e.preventDefault();

		setLoading(true);
		setQuery(e.target.value);
		// getChannels(query);
		getChannels(e.target.value);
	};

	return (
		<div className='channel-search__container'>
			<div className='channel-search__input__wrapper'>
				<div className='channel-search__input__icon'>
					<SearchIcon />
				</div>
				<input
					type='text'
					className='channel__input__text'
					placeholder='Search Channel...'
					value={query}
					onChange={onSearch}
				/>
			</div>
		</div>
	);
};

export default ChannelSearch;
