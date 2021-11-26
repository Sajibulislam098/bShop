const INITIAL_STATE = {
	sections: [
		{
			id: 1,
			name: "Hats",
			img:
				"https://lh3.googleusercontent.com/proxy/i4Mq7IbGmtTDHH05twH8-WLNitGj-bvutgnlX_CzVOIYU_S3-YTZLZVDlpr6p9HDBgKNr3pPLh3aBBPml6WOuK8y9UyMH89xtd12i96mV5DOoSCYykyqjpVVeVLTKQVyk0dVbEs0KskB5xwrxXKZfu_Dt1WStnIUZcqZwXEuoLSfYfa-wrW2KdAFvsdtLf2YsL9kPvCugoGssBGkXY4upeG5NVLm1S89rSphFvrOxKs",
			linkUrl: "shop/hats",
		},
		{
			id: 2,
			name: "Sneakers",
			img:
				"https://cheapinus.weblan.net/images/201902/uploaded/d5fb2768abb4cb8ebd50867e6edb1e7b.jpg",
			linkUrl: "shop/sneakers",
		},
		{
			id: 3,
			name: "Out Door",
			img: "https://i.ibb.co/XzcwL5s/black-shearling.png",
			linkUrl: "shop/jackets",
		},
	],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
