import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'First Meetup',
		image:
			'https://cdn.pixabay.com/photo/2019/04/11/13/59/paris-4119828_1280.jpg',
		address: 'Some address 5, 12345 Some City',
		description: 'this is a first meetup',
	},
	{
		id: 'm2',
		title: 'First Meetup',
		image:
			'https://cdn.pixabay.com/photo/2019/04/11/13/59/paris-4119828_1280.jpg',
		address: 'Some address 5, 12345 Some City',
		description: 'this is a second meetup',
	},
];

function HomePage() {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
