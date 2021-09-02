import { AddChannel } from '../assets';
import PropTypes from 'prop-types';

const TeamChannelList = ({ children, error = false, loading, type }) => {
	if (error) {
		return type === 'team' ? (
			<div className='team-channel-list'>
				<p className='team-channel-list__message'>
					Connection Error, please wait a moment and try again.
				</p>
			</div>
		) : null;
	}
	// {error && type === 'team' ? (
	// 	<div className=""></div>
	// ) : null;}

	if (loading) {
		return (
			<div className='team-channel-list'>
				<p className='team-channel-list__message loading'>
					{type === 'team' ? 'Channels' : 'Messages'} loading...
				</p>
			</div>
		);
	}

	// {
	// 	loading && (
	// 		<div className='team-channel-list'>
	// 			<p className='team-channel-list__message'>
	// 				Connection Error, please wait a moment and try again.
	// 			</p>
	// 		</div>
	// 	);
	// }

	return (
		<div className='team-channel-list'>
			<div className='team-channel-list__header'>
				<p className='team-channel-list__header__list'>
					{type === 'team' ? 'Channels' : 'Direct Messages'}
				</p>
			</div>
			{children}
		</div>
	);
};

TeamChannelList.propTypes = {
	children: PropTypes.any,
	type: PropTypes.string,
	error: PropTypes.bool,
	loading: PropTypes.bool,
};
export default TeamChannelList;
