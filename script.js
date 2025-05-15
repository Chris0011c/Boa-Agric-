// Highlight active page in navigation bar
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach((link) => {
	if (link.getAttribute("href") === currentPage) {
		link.classList.add("active");
	}
});

const agriCourses = [
	{
		id: 1,
		title: "Introduction to Agriculture",
		description: "Learn the basics of agriculture, farming techniques, and sustainable practices.",
		image: "https://example.com/agri1.jpg",
	},
	{
		id: 2,
		title: "Organic Farming Fundamentals",
		description: "Discover how to grow crops without synthetic pesticides or fertilizers.",
		image: "https://example.com/agri2.jpg",
	},
	{
		id: 3,
		title: "Soil Science and Management",
		description: "Understand soil composition, fertility, and conservation methods.",
		image: "https://example.com/agri3.jpg",
	},
	{
		id: 4,
		title: "Precision Agriculture Technologies",
		description: "Learn about GPS, drones, and sensors for efficient farm management.",
		image: "https://example.com/agri4.jpg",
	},
	{
		id: 5,
		title: "Sustainable Water Management",
		description: "Techniques for irrigation and water conservation in agriculture.",
		image: "https://example.com/agri5.jpg",
	},
	{
		id: 6,
		title: "Livestock Production Systems",
		description: "Comprehensive guide to animal husbandry and livestock management.",
		image: "https://example.com/agri6.jpg",
	},
	{
		id: 7,
		title: "Agribusiness Management",
		description: "Business principles applied to agricultural enterprises.",
		image: "https://example.com/agri7.jpg",
	},
	{
		id: 8,
		title: "Plant Pathology",
		description: "Study of plant diseases and their management.",
		image: "https://example.com/agri8.jpg",
	},
	{
		id: 9,
		title: "Agricultural Economics",
		description: "Economic principles applied to food production and distribution.",
		image: "https://example.com/agri9.jpg",
	},
	{
		id: 10,
		title: "Greenhouse Technology",
		description: "Design and management of controlled environment agriculture.",
		image: "https://example.com/agri10.jpg",
	},
	{
		id: 11,
		title: "Food Security and Policy",
		description: "Global perspectives on ensuring stable food supplies.",
		image: "https://example.com/agri11.jpg",
	},
	{
		id: 12,
		title: "Agricultural Biotechnology",
		description: "Applications of biotechnology in crop improvement.",
		image: "https://example.com/agri12.jpg",
	},
	{
		id: 13,
		title: "Farm Machinery and Equipment",
		description: "Operation and maintenance of agricultural machinery.",
		image: "https://example.com/agri13.jpg",
	},
	{
		id: 14,
		title: "Beekeeping and Apiculture",
		description: "Techniques for honey production and pollination services.",
		image: "https://example.com/agri14.jpg",
	},
	{
		id: 15,
		title: "Aquaculture Systems",
		description: "Principles of fish and aquatic organism farming.",
		image: "https://example.com/agri15.jpg",
	},
	{
		id: 16,
		title: "Agroforestry Practices",
		description: "Integrating trees with crops and livestock systems.",
		image: "https://example.com/agri16.jpg",
	},
	{
		id: 17,
		title: "Agricultural Extension Methods",
		description: "Strategies for disseminating agricultural knowledge to farmers.",
		image: "https://example.com/agri17.jpg",
	},
	{
		id: 18,
		title: "Seed Technology",
		description: "Production, processing, and storage of quality seeds.",
		image: "https://example.com/agri18.jpg",
	},
	{
		id: 19,
		title: "Post-Harvest Technology",
		description: "Methods to preserve and add value to agricultural produce.",
		image: "https://example.com/agri19.jpg",
	},
	{
		id: 20,
		title: "Climate-Smart Agriculture",
		description: "Adapting farming to climate change challenges.",
		image: "https://example.com/agri20.jpg",
	},
	{
		id: 21,
		title: "Urban Agriculture",
		description: "Farming techniques for city environments.",
		image: "https://example.com/agri21.jpg",
	},
	{
		id: 22,
		title: "Agricultural Marketing",
		description: "Strategies for selling farm products effectively.",
		image: "https://example.com/agri22.jpg",
	},
	{
		id: 23,
		title: "Dairy Science and Technology",
		description: "Production and processing of milk and dairy products.",
		image: "https://example.com/agri23.jpg",
	},
	{
		id: 24,
		title: "Poultry Production",
		description: "Raising chickens and other birds for meat and eggs.",
		image: "https://example.com/agri24.jpg",
	},
	{
		id: 25,
		title: "Agricultural Statistics",
		description: "Data analysis methods for agricultural research.",
		image: "https://example.com/agri25.jpg",
	},
	{
		id: 26,
		title: "Integrated Pest Management",
		description: "Ecological approach to pest control.",
		image: "https://example.com/agri26.jpg",
	},
	{
		id: 27,
		title: "Farm Accounting and Finance",
		description: "Financial management for agricultural operations.",
		image: "https://example.com/agri27.jpg",
	},
	{
		id: 28,
		title: "Agricultural Waste Management",
		description: "Sustainable handling of farm byproducts.",
		image: "https://example.com/agri28.jpg",
	},
	{
		id: 29,
		title: "Hydroponics and Soilless Culture",
		description: "Growing plants without soil using nutrient solutions.",
		image: "https://example.com/agri29.jpg",
	},
	{
		id: 30,
		title: "Agricultural Robotics",
		description: "Automation technologies for farming applications.",
		image: "https://example.com/agri30.jpg",
	},
	{
		id: 31,
		title: "Wine Production and Viticulture",
		description: "Grape growing and winemaking techniques.",
		image: "https://example.com/agri31.jpg",
	},
	{
		id: 32,
		title: "Agricultural Policy Analysis",
		description: "Understanding government policies affecting farming.",
		image: "https://example.com/agri32.jpg",
	},
	{
		id: 33,
		title: "Animal Nutrition",
		description: "Feed composition and dietary requirements for livestock.",
		image: "https://example.com/agri33.jpg",
	},
	{
		id: 34,
		title: "Farm Safety and Risk Management",
		description: "Identifying and mitigating agricultural hazards.",
		image: "https://example.com/agri34.jpg",
	},
	{
		id: 35,
		title: "Agricultural Cooperatives",
		description: "Organization and management of farmer collectives.",
		image: "https://example.com/agri35.jpg",
	},
	{
		id: 36,
		title: "Mushroom Cultivation",
		description: "Techniques for growing edible fungi.",
		image: "https://example.com/agri36.jpg",
	},
	{
		id: 37,
		title: "Agricultural Law",
		description: "Legal aspects of farming and land use.",
		image: "https://example.com/agri37.jpg",
	},
	{
		id: 38,
		title: "Tropical Agriculture",
		description: "Farming systems for tropical climates.",
		image: "https://example.com/agri38.jpg",
	},
	{
		id: 39,
		title: "Agricultural Engineering",
		description: "Design of equipment and structures for farming.",
		image: "https://example.com/agri39.jpg",
	},
	{
		id: 40,
		title: "Food Quality Assurance",
		description: "Standards and practices for safe food production.",
		image: "https://example.com/agri40.jpg",
	},
	{
		id: 41,
		title: "Rural Sociology",
		description: "Social aspects of agricultural communities.",
		image: "https://example.com/agri41.jpg",
	},
	{
		id: 42,
		title: "Agricultural Geography",
		description: "Spatial patterns of farming systems.",
		image: "https://example.com/agri42.jpg",
	},
	{
		id: 43,
		title: "Farm-to-Table Systems",
		description: "Connecting producers directly with consumers.",
		image: "https://example.com/agri43.jpg",
	},
	{
		id: 44,
		title: "Agricultural Education",
		description: "Teaching methods for agricultural subjects.",
		image: "https://example.com/agri44.jpg",
	},
	{
		id: 45,
		title: "Permaculture Design",
		description: "Creating sustainable agricultural ecosystems.",
		image: "https://example.com/agri45.jpg",
	},
	{
		id: 46,
		title: "Agricultural Heritage Systems",
		description: "Traditional farming practices and their preservation.",
		image: "https://example.com/agri46.jpg",
	},
	{
		id: 47,
		title: "Agricultural Data Science",
		description: "Big data applications in farming.",
		image: "https://example.com/agri47.jpg",
	},
	{
		id: 48,
		title: "Microbial Ecology in Agriculture",
		description: "Role of microorganisms in soil and plant health.",
		image: "https://example.com/agri48.jpg",
	},
	{
		id: 49,
		title: "Agricultural Supply Chain Management",
		description: "Logistics of getting farm products to market.",
		image: "https://example.com/agri49.jpg",
	},
	{
		id: 50,
		title: "Agricultural Journalism",
		description: "Communicating agricultural news and information.",
		image: "https://example.com/agri50.jpg",
	},
	{
		id: 51,
		title: "Floriculture and Landscape Design",
		description: "Growing flowers and designing ornamental spaces.",
		image: "https://example.com/agri51.jpg",
	},
	{
		id: 52,
		title: "Agricultural Risk Assessment",
		description: "Evaluating and managing farming uncertainties.",
		image: "https://example.com/agri52.jpg",
	},
	{
		id: 53,
		title: "Agricultural Commodity Trading",
		description: "Markets and pricing for farm products.",
		image: "https://example.com/agri53.jpg",
	},
	{
		id: 54,
		title: "Agricultural Remote Sensing",
		description: "Using satellite imagery for farm monitoring.",
		image: "https://example.com/agri54.jpg",
	},
	{
		id: 55,
		title: "Agricultural Ethics",
		description: "Moral issues in food production and land use.",
		image: "https://example.com/agri55.jpg",
	},
	{
		id: 56,
		title: "Agricultural Insurance",
		description: "Risk management through crop and livestock insurance.",
		image: "https://example.com/agri56.jpg",
	},
	{
		id: 57,
		title: "Agricultural Value Chains",
		description: "Analysis of production to consumption systems.",
		image: "https://example.com/agri57.jpg",
	},
	{
		id: 58,
		title: "Agricultural Trade Policy",
		description: "International regulations affecting farm exports.",
		image: "https://example.com/agri58.jpg",
	},
	{
		id: 59,
		title: "Agricultural Nanotechnology",
		description: "Applications of nanotech in farming.",
		image: "https://example.com/agri59.jpg",
	},
	{
		id: 60,
		title: "Agricultural Meteorology",
		description: "Weather and climate impacts on farming.",
		image: "https://example.com/agri60.jpg",
	},
	{
		id: 61,
		title: "Agricultural Robotics and Automation",
		description: "Emerging technologies for farm mechanization.",
		image: "https://example.com/agri61.jpg",
	},
	{
		id: 62,
		title: "Agricultural Cybersecurity",
		description: "Protecting farm data and connected systems.",
		image: "https://example.com/agri62.jpg",
	},
	{
		id: 63,
		title: "Agricultural Blockchain Applications",
		description: "Using distributed ledgers for food traceability.",
		image: "https://example.com/agri63.jpg",
	},
	{
		id: 64,
		title: "Agricultural Artificial Intelligence",
		description: "AI applications in crop and livestock management.",
		image: "https://example.com/agri64.jpg",
	},
	{
		id: 65,
		title: "Agricultural Drones and UAVs",
		description: "Using unmanned aircraft for farm monitoring.",
		image: "https://example.com/agri65.jpg",
	},
	{
		id: 66,
		title: "Agricultural IoT Systems",
		description: "Internet-connected devices for smart farming.",
		image: "https://example.com/agri66.jpg",
	},
	{
		id: 67,
		title: "Agricultural Biotechnology Ethics",
		description: "Debates surrounding GMOs and gene editing.",
		image: "https://example.com/agri67.jpg",
	},
	{
		id: 68,
		title: "Agricultural Water Footprint",
		description: "Assessing water use in food production.",
		image: "https://example.com/agri68.jpg",
	},
	{
		id: 69,
		title: "Agricultural Carbon Footprint",
		description: "Measuring greenhouse gas emissions from farming.",
		image: "https://example.com/agri69.jpg",
	},
	{
		id: 70,
		title: "Agricultural Biodiversity",
		description: "Conservation of genetic resources in farming.",
		image: "https://example.com/agri70.jpg",
	},
	{
		id: 71,
		title: "Agricultural Indigenous Knowledge",
		description: "Traditional ecological knowledge in farming.",
		image: "https://example.com/agri71.jpg",
	},
	{
		id: 72,
		title: "Agricultural Gender Studies",
		description: "Role of gender in agricultural systems.",
		image: "https://example.com/agri72.jpg",
	},
	{
		id: 73,
		title: "Agricultural Youth Development",
		description: "Engaging young people in farming careers.",
		image: "https://example.com/agri73.jpg",
	},
	{
		id: 74,
		title: "Agricultural Conflict Resolution",
		description: "Managing disputes over land and resources.",
		image: "https://example.com/agri74.jpg",
	},
	{
		id: 75,
		title: "Agricultural Tourism",
		description: "Developing farm-based visitor experiences.",
		image: "https://example.com/agri75.jpg",
	},
	{
		id: 76,
		title: "Agricultural Photography",
		description: "Documenting farming through visual media.",
		image: "https://example.com/agri76.jpg",
	},
	{
		id: 77,
		title: "Agricultural Podcasting",
		description: "Creating audio content about farming topics.",
		image: "https://example.com/agri77.jpg",
	},
	{
		id: 78,
		title: "Agricultural Social Media",
		description: "Using digital platforms for farm marketing.",
		image: "https://example.com/agri78.jpg",
	},
	{
		id: 79,
		title: "Agricultural Leadership",
		description: "Developing management skills for farm operations.",
		image: "https://example.com/agri79.jpg",
	},
	{
		id: 80,
		title: "Agricultural Innovation Systems",
		description: "Processes of technological change in farming.",
		image: "https://example.com/agri80.jpg",
	},
	{
		id: 81,
		title: "Agricultural History",
		description: "Evolution of farming practices over time.",
		image: "https://example.com/agri81.jpg",
	},
	{
		id: 82,
		title: "Agricultural Anthropology",
		description: "Cultural aspects of food production systems.",
		image: "https://example.com/agri82.jpg",
	},
	{
		id: 83,
		title: "Agricultural Philosophy",
		description: "Fundamental questions about farming and nature.",
		image: "https://example.com/agri83.jpg",
	},
	{
		id: 84,
		title: "Agricultural Psychology",
		description: "Behavioral aspects of farming communities.",
		image: "https://example.com/agri84.jpg",
	},
	{
		id: 85,
		title: "Agricultural Architecture",
		description: "Design of farm buildings and structures.",
		image: "https://example.com/agri85.jpg",
	},
	{
		id: 86,
		title: "Agricultural Art",
		description: "Creative expressions inspired by farming.",
		image: "https://example.com/agri86.jpg",
	},
	{
		id: 87,
		title: "Agricultural Music",
		description: "Folk traditions and songs about rural life.",
		image: "https://example.com/agri87.jpg",
	},
	{
		id: 88,
		title: "Agricultural Literature",
		description: "Writings about farming and rural experiences.",
		image: "https://example.com/agri88.jpg",
	},
	{
		id: 89,
		title: "Agricultural Film Studies",
		description: "Movies and documentaries about farming.",
		image: "https://example.com/agri89.jpg",
	},
	{
		id: 90,
		title: "Agricultural Fashion",
		description: "Clothing and textiles inspired by rural life.",
		image: "https://example.com/agri90.jpg",
	},
	{
		id: 91,
		title: "Agricultural Wellness",
		description: "Health benefits of farming activities.",
		image: "https://example.com/agri91.jpg",
	},
	{
		id: 92,
		title: "Agricultural Therapy",
		description: "Using farming for mental health treatment.",
		image: "https://example.com/agri92.jpg",
	},
	{
		id: 93,
		title: "Agricultural Meditation",
		description: "Mindfulness practices in farming settings.",
		image: "https://example.com/agri93.jpg",
	},
	{
		id: 94,
		title: "Agricultural Yoga",
		description: "Combining farming with yoga practice.",
		image: "https://example.com/agri94.jpg",
	},
	{
		id: 95,
		title: "Agricultural Nutrition",
		description: "Health aspects of farm-fresh foods.",
		image: "https://example.com/agri95.jpg",
	},
	{
		id: 96,
		title: "Agricultural Fitness",
		description: "Physical exercise through farm work.",
		image: "https://example.com/agri96.jpg",
	},
	{
		id: 97,
		title: "Agricultural Sleep Science",
		description: "Rest patterns in farming communities.",
		image: "https://example.com/agri97.jpg",
	},
	{
		id: 98,
		title: "Agricultural Longevity",
		description: "Health and lifespan in farming populations.",
		image: "https://example.com/agri98.jpg",
	},
	{
		id: 99,
		title: "Agricultural Happiness",
		description: "Quality of life in agricultural settings.",
		image: "https://example.com/agri99.jpg",
	},
	{
		id: 100,
		title: "Future of Agriculture",
		description: "Emerging trends and innovations in farming.",
		image: "https://example.com/agri100.jpg",
	},
];

const agriWebinars = [
	{
		name: "Sustainable Farming Practices",
		date: "2023-06-15",
		time: "10:00 AM",
	},
	{
		name: "Organic Crop Production",
		date: "2023-06-17",
		time: "2:00 PM",
	},
	{
		name: "Precision Agriculture Technologies",
		date: "2023-06-20",
		time: "9:30 AM",
	},
	{
		name: "Soil Health Management",
		date: "2023-06-22",
		time: "11:00 AM",
	},
	{
		name: "Hydroponics for Beginners",
		date: "2023-06-25",
		time: "3:00 PM",
	},
	{
		name: "Climate-Smart Agriculture",
		date: "2023-06-28",
		time: "1:00 PM",
	},
	{
		name: "Agri-Business Marketing Strategies",
		date: "2023-07-01",
		time: "10:30 AM",
	},
	{
		name: "Livestock Management Techniques",
		date: "2023-07-05",
		time: "4:00 PM",
	},
	{
		name: "Vertical Farming Innovations",
		date: "2023-07-08",
		time: "2:30 PM",
	},
	{
		name: "Pest Control in Organic Farming",
		date: "2023-07-12",
		time: "9:00 AM",
	},
	{
		name: "Farm-to-Table Supply Chains",
		date: "2023-07-15",
		time: "11:30 AM",
	},
	{
		name: "Agricultural Water Management",
		date: "2023-07-18",
		time: "3:30 PM",
	},
	{
		name: "Regenerative Agriculture Principles",
		date: "2023-07-22",
		time: "1:30 PM",
	},
	{
		name: "Smart Greenhouse Technologies",
		date: "2023-07-25",
		time: "10:00 AM",
	},
	{
		name: "Agri-Tech Startups: Opportunities",
		date: "2023-07-28",
		time: "4:30 PM",
	},
	{
		name: "Farm Financial Management",
		date: "2023-08-01",
		time: "2:00 PM",
	},
	{
		name: "Urban Agriculture Solutions",
		date: "2023-08-04",
		time: "9:00 AM",
	},
	{
		name: "Drones in Precision Farming",
		date: "2023-08-08",
		time: "11:00 AM",
	},
	{
		name: "Sustainable Livestock Feeding",
		date: "2023-08-11",
		time: "3:00 PM",
	},
	{
		name: "Future of Agri-Robotics",
		date: "2023-08-15",
		time: "1:00 PM",
	},
];

const agricResources = [
	{
		name: "Wheat",
		description: "A cereal grain used for making flour, bread, and other food products.",
	},
	{
		name: "Corn",
		description: "A staple crop used for food, animal feed, and biofuel production.",
	},
	{
		name: "Rice",
		description: "A primary food source for over half the world's population",
	},
	{
		name: "Soybeans",
		description: "Legumes rich in protein, used for animal feed, tofu, and vegetable oil.",
	},
	{
		name: "Potatoes",
		description: "Starchy tubers that are a dietary staple in many cultures worldwide.",
	},
	{
		name: "Tomatoes",
		description: "Fruits (often used as vegetables) rich in vitamins and antioxidants.",
	},
	{
		name: "Cotton",
		description: "A fiber crop used in textile manufacturing, also producing cottonseed oil.",
	},
	{
		name: "Coffee",
		description: "A tropical crop whose beans are roasted and brewed to make beverages.",
	},
	{
		name: "Apples",
		description: "Popular temperate fruits consumed fresh or used in cooking and cider.",
	},
	{
		name: "Olive Trees",
		description: "Mediterranean trees cultivated for their fruit and the oil extracted from them.",
	},
];

let pageNumber = 1;
let pageSize = 10;

function paginateArray(array, pageSize, pageNumber) {
	const startIndex = (pageNumber - 1) * pageSize;
	const endIndex = pageNumber * pageSize;
	return array.slice(startIndex, endIndex);
}

let loadCourseButton = document.getElementById("loadMoreCourses");
loadCourseButton?.addEventListener("click", () => {
	pageNumber++;
	loadCourses(pageNumber);
});

let loadWebinarsButton = document.getElementById("loadMoreWebinars");
loadWebinarsButton?.addEventListener("click", () => {
	pageNumber++;
	loadWebinars(pageNumber);
});

let loadResourceButton = document.getElementById("loadMoreResources");
loadResourceButton?.addEventListener("click", () => {
	pageNumber++;
	loadResources(pageNumber);
});

// Load Courses
function loadCourses(page) {
	const courseGrid = document.getElementById("course-grid");

	const pageItems = paginateArray(agriCourses, pageSize, page);

	for (let i = 0; i < pageItems.length; i++) {
		const courseItem = document.createElement("div");
		courseItem.classList.add("col-md-4", "mb-4");
		courseItem.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-truncate">${agriCourses[i].title}</h5>
                    <p class="card-text text-truncate">${agriCourses[i].description}</p>
                    <a href="#" class="btn btn-success">Enroll Now</a>
                </div>
            </div>
        `;
		courseGrid?.appendChild(courseItem);
	}

	//Disable the load more button if there are no more items to render
	if (page * pageSize >= agriCourses.length) {
		loadCourseButton.disabled = true;
	}
}

// <img src=${agriCourses[i].image} class="card-img-top" alt="Course Image">

// Load Webinars
function loadWebinars(page) {
	const webinarGrid = document.getElementById("webinar-grid");
	const pageItems = paginateArray(agriWebinars, pageSize, page);

	for (let i = 0; i < pageItems.length; i++) {
		const webinarItem = document.createElement("div");
		webinarItem.classList.add("col-md-4", "mb-4");
		webinarItem.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Webinar ${agriWebinars[i].name}</h5>
                    <p class="card-text">Date: ${agriWebinars[i].date} | ${agriWebinars[i].time}</p>
                    <a href="#" class="btn btn-success">Register Now</a>
                </div>
            </div>
        `;
		webinarGrid?.appendChild(webinarItem);
	}

	//Disable the load more button if there are no more items to render
	if (page * pageSize >= agriWebinars.length) {
		loadWebinarsButton.disabled = true;
	}
}

// Load Resources
function loadResources(page) {
	const resourceGrid = document.getElementById("resource-grid");
	const pageItems = paginateArray(agricResources, pageSize, page);

	for (let i = 0; i < pageItems.length; i++) {
		const resourceItem = document.createElement("div");
		resourceItem.classList.add("col-md-4", "mb-4");
		resourceItem.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${pageItems[i].name}</h5>
                    <p class="card-text">${pageItems[i].description}</p>
                    <a href="#" class="btn btn-success">Download</a>
                </div>
            </div>
        `;
		resourceGrid?.appendChild(resourceItem);
	}
	//Disable the load more button if there are no more items to render
	if (page * pageSize >= agricResources.length) {
		loadResourceButton.disabled = true;
	}
}

// Initial Load
loadCourses(pageNumber);
loadWebinars(pageNumber);
loadResources(pageNumber);

// Form Submissions
document.getElementById("contact-form")?.addEventListener("submit", function (e) {
	e.preventDefault();
	alert("Thank you for contacting us! We will get back to you soon.");
	this.reset();
});

document.getElementById("login-form")?.addEventListener("submit", function (e) {
	e.preventDefault();
	alert("Logged in successfully!");
});
