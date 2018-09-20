// Make sure the shape of this data stays consistent
// Also ensure that the id starts at 0 and increases by 1

import { withPrefix } from 'gatsby'

const imageDir = 'images/headshots'

const teamMembers = [
	{
		id: 0,
		name: 'Juan Anton',
		imageUrl: withPrefix(`${imageDir}/anton-juan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/anton-juan-h.jpg`),
		title: 'Senior UX Designer',
		icon: 'fa fa-palette',
		page: 'null',
	},
	{
		id: 1,
		name: 'David Aragones',
		imageUrl: withPrefix(`${imageDir}/aragones-david.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/aragones-david-h.jpg`),
		title: 'Senior UX Designer',
		icon: 'fa fa-universal-access',
		page: 'null',
	},
	{
		id: 3,
		name: 'Julia Chan',
		imageUrl: withPrefix(`${imageDir}/chan-julia.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/chan-julia-h.jpg`),
		title: 'Graphic Designer',
		icon: 'fa fa-coffee',
		page: 'null',
	},
	{
		id: 5,
		name: 'Emiliano Cicero',
		imageUrl: withPrefix(`${imageDir}/cicero-emiliano.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/cicero-emiliano-h.jpg`),
		title: 'UX Designer',
		icon: 'fa fa-bezier-curve',
		page: 'null',
	},
	{
		id: 6,
		name: 'Ryan Connolly',
		imageUrl: withPrefix(`${imageDir}/connolly-ryan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/connolly-ryan-h.jpg`),
		title: 'UX Design Manager',
		icon: 'fa fa-pen',
		page: 'null',
	},
	{
		id: 7,
		name: 'Jadson Dantas',
		imageUrl: withPrefix(`${imageDir}/dantas-jadson.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/dantas-jadson-h.jpg`),
		title: 'UX Designer',
		icon: 'fa fa-music',
		page: 'null',
	},
	{
		id: 8,
		name: 'Vitor Fernandes',
		imageUrl: withPrefix(`${imageDir}/fernandes-vitor.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/fernandes-vitor-h.jpg`),
		title: 'UX Design Manager',
		icon: 'fa fa-rocket',
		page: 'null',
	},
	{
		id: 9,
		name: 'Rafael Fernandes',
		imageUrl: withPrefix(`${imageDir}/fernandes-rafael.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/fernandes-rafael-h.jpg`),
		title: 'Senior UX Designer',
		icon: 'fa fa-headphones-alt',
		page: 'null',
	},
	{
		id: 10,
		name: 'Markus Hammer',
		imageUrl: withPrefix(`${imageDir}/hammer-markus.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hammer-markus-h.jpg`),
		title: 'Senior Graphic Designer',
		icon: 'fa fa-gavel',
		page: 'null',
	},
	{
		id: 11,
		name: 'Paul Hanaoka',
		imageUrl: withPrefix(`${imageDir}/hanaoka-paul.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hanaoka-paul-h.jpg`),
		title: 'UX Design Manager',
		icon: 'fa fa-terminal',
		page: '/team/hanaoka-paul',
	},
	{
		id: 12,
		name: 'Abel Hancock',
		imageUrl: withPrefix(`${imageDir}/hancock-abel.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hancock-abel-h.jpg`),
		title: 'Associate UX Designer',
		icon: 'fa fa-code',
		page: '/team/hancock-abel',
	},
	{
		id: 13,
		name: 'Juan Hidalgo',
		imageUrl: withPrefix(`${imageDir}/hidalgo-juan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hidalgo-juan-h.jpg`),
		title: 'UX Director',
		icon: 'fa fa-heart',
		page: 'null',
	},
	{
		id: 14,
		name: 'Naoki Hisamoto',
		imageUrl: withPrefix(`${imageDir}/hisamoto-naoki.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hisamoto-naoki-h.jpg`),
		title: 'Associate UX Designer',
		icon: 'fa fa-check-double',
		page: 'null',
	},
	{
		id: 15,
		name: 'Bryan Ho',
		imageUrl: withPrefix(`${imageDir}/ho-bryan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/ho-bryan-h.jpg`),
		title: 'Associate Graphic Design Manager',
		icon: 'fa fa-pencil-alt',
		page: 'null',
	},
	{
		id: 16,
		name: 'Chris Jeong',
		imageUrl: withPrefix(`${imageDir}/jeong-chris.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/jeong-chris-h.jpg`),
		title: 'UX Designer',
		icon: 'fa fa-glasses',
		page: '/team/jeong-chris',
	},
	{
		id: 17,
		name: 'Jessica Lee',
		imageUrl: withPrefix(`${imageDir}/lee-jessica.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/lee-jessica-h.jpg`),
		title: 'Graphic Designer',
		icon: 'fa fa-pen-nib',
		page: 'null',
	},
	{
		id: 19,
		name: 'Nathalia Moura',
		imageUrl: withPrefix(`${imageDir}/moura-nathalia.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/moura-nathalia-h.jpg`),
		title: 'UX Designer',
		icon: 'fa fa-map-marked-alt',
		page: 'null',
	},
	{
		id: 21,
		name: 'Patrick Pentz',
		imageUrl: withPrefix(`${imageDir}/pentz-patrick.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/pentz-patrick-h.jpg`),
		title: 'Associate UX Designer',
		icon: 'fa fa-camera',
		page: 'null',
	},
	{
		id: 22,
		name: 'Felipe Pires',
		imageUrl: withPrefix(`${imageDir}/pires-felipe.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/pires-felipe-h.jpg`),
		title: 'UX Design Manager',
		icon: 'fa fa-dumbbell',
		page: 'null',
	},
	{
		id: 23,
		name: 'Davi Shamá',
		imageUrl: withPrefix(`${imageDir}/shama-davi.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/shama-davi-h.jpg`),
		title: 'Associate UX Designer',
		icon: 'fa fa-pencil-ruler',
		page: 'null',
	},
	{
		id: 25,
		name: 'Victor Valle',
		imageUrl: withPrefix(`${imageDir}/valle-victor.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/valle-victor-h.jpg`),
		title: 'UX Design Manager',
		icon: 'fas fa-fingerprint',
		page: '/team/valle-victor',
	},
	{
		id: 26,
		name: 'Susana Vázquez',
		imageUrl: withPrefix(`${imageDir}/vazquez-susana.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/vazquez-susana-h.jpg`),
		title: 'Associate UX Designer',
		icon: 'fa fa-archway',
		page: 'null',
	},
	{
		id: 27,
		name: 'Sharon Wong',
		imageUrl: withPrefix(`${imageDir}/wong-sharon.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/wong-sharon-h.jpg`),
		title: 'Graphic Designer',
		icon: 'fa fa-pen-fancy',
		page: 'null',
	},
	{
		id: 30,
		name: 'Emily Young',
		imageUrl: withPrefix(`${imageDir}/young-emily.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/young-emily-h.jpg`),
		title: 'Graphic Design Manager',
		icon: 'fa fa-stroopwafel',
		page: 'null',
	},
	{
		id: 31,
		name: 'Rachel Yuan',
		imageUrl: withPrefix(`${imageDir}/yuan-rachel.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/yuan-rachel-h.jpg`),
		title: 'Senior Graphic Designer',
		icon: 'fa fa-chess-queen',
		page: 'null',
	},
	{
		id: 32,
		name: 'James Lyons',
		imageUrl: withPrefix(`${imageDir}/-upside-down-face.png`),
		imageHoverUrl: withPrefix(`${imageDir}/-thinking-face.png`),
		title: 'UX Designer',
		icon: 'fa fa-drum',
		page: '/team/lyons-james',
	},
	{
		id: 33,
		name: 'David Kim',
		imageUrl: withPrefix(`${imageDir}/-sunglasses.png`),
		imageHoverUrl: withPrefix(`${imageDir}/hancock-abel-h.jpg`),
		title: 'UX Designer',
		icon: 'fa fa-pastafarianism',
		page: '/team/kim-david',
	},
]

export default teamMembers
