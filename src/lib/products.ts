import { Product } from '@/types';

export const products: Product[] = [
	{
		id: '1',
		slug: 'muscle-milk-genuine-protein-shake-chocolate',
		name: 'Muscle Milk Genuine Protein Shake – Chocolate',
		price: 55000,
		discountPrice: 52000,
		image: '/images/products/MM-whey-protein.avif',
		description:
			'Delicious ready-to-drink protein shake delivering complete muscle recovery and sustained energy.',
		longDescription:
			'Muscle Milk Genuine Protein Shake in rich chocolate flavor provides a premium source of complete protein for muscle recovery, strength, and performance. Each 500ml bottle delivers 25g of high-quality milk proteins (casein and whey), designed to support lean muscle repair and energy metabolism. Fortified with essential vitamins and minerals, this shake is ideal as a convenient post-workout recovery drink or on-the-go meal replacement. Gluten-free, lactose-free, and made with zero added sugar, Muscle Milk delivers clean, sustained energy for athletes, gym-goers, and active professionals.',
		benefits: [
			'Supports lean muscle repair and recovery',
			'Delivers 25g of complete protein per serving',
			'Provides sustained energy with slow-digesting proteins',
			'Fortified with 20+ essential vitamins and minerals',
			'Lactose-free and gluten-free for easy digestion',
			'Convenient ready-to-drink format for on-the-go use',
		],
		ingredients: [
			'Water',
			'Milk Protein Concentrate',
			'Calcium Caseinate',
			'Cocoa Powder (Processed with Alkali)',
			'Canola Oil',
			'Sodium and Potassium Phosphates',
			'Sodium Hexametaphosphate',
			'Sodium Polyphosphate',
			'Cellulose Gel and Gum',
			'Carrageenan',
			'Sucralose and Acesulfame Potassium (Sweeteners)',
			'Natural and Artificial Flavors',
			'Vitamins and Minerals Blend (Calcium, Iron, Vitamin D, B12, etc.)',
		],
		dosage:
			'Consume one 500ml bottle post-workout or as a protein-rich snack. Shake well before use and refrigerate after opening.',
		category: 'protein',
	},
	{
		id: '2',
		slug: 'body-fortress-super-advanced-whey-protein-chocolate',
		name: 'Body Fortress Super Advanced Whey Protein Powder – Chocolate',
		price: 70000,
		discountPrice: 65000,
		image: '/images/products/body-fortress-whey-protein.jpeg',
		description:
			'High-impact whey protein powder delivering up to 60 g protein and 12 g BCAAs (2-scoop serving) for serious muscle recovery.',
		longDescription:
			'Body Fortress Super Advanced Whey Protein Powder in rich chocolate flavour is engineered for athletes and gym-goers who demand maximum muscle repair and strength support. Each two-scoop serving delivers approximately 60 g of premium whey (blend of whey concentrate & isolate) and 12 g of branched-chain amino acids, along with vitamins C & D plus zinc to support immune function. This gluten-free, aspartame-free formula is designed to be used post-workout, between meals or whenever you need a high-protein boost to meet your daily target. For serious performance and muscle-building goals, this product supports lean muscle gains, faster recovery and sustained training capacity.',
		benefits: [
			'Delivers up to 60 g of protein per two-scoop serving',
			'Provides 12 g BCAAs to support muscle repair and growth',
			'Includes immune-support nutrients: Vitamins C, D & Zinc',
			'Gluten-free and aspartame-free for cleaner nutrition',
			'Delicious chocolate flavour with smooth mixability',
			'Ideal post-workout or as a high-protein meal supplement',
		],
		ingredients: [
			'Whey Protein Blend (Whey Protein Concentrate, Whey Protein Isolate)',
			'Cocoa (processed with alkali)',
			'Maltodextrin',
			'Lecithin',
			'Natural & Artificial Flavours',
			'Salt',
			'Cellulose Gum',
			'Ascorbic Acid (Vitamin C)',
			'Zinc Oxide',
			'Vitamin D3',
			'Acesulfame Potassium',
			'Sucralose',
		],
		dosage:
			'For moderate goals: mix one (1) scoop (approx. 45 g) with 6-8 oz (180-240 ml) beverage. For intense training: mix two (2) scoops with 14-16 oz (420-480 ml) immediately after workout or as needed during the day.',
		category: 'protein',
	},
	{
		id: '3',
		slug: 'undisputed-juice-premium-hydration-formula',
		name: 'Undisputed Juice – Premium Hydration Formula',
		price: 22000,
		discountPrice: 19000,
		image: '/images/products/undisputed-preworkout.jpg',
		description:
			'High-performance hydration formula designed to support fasted training and zero-insulin-spike energy.',
		longDescription:
			'Undisputed Juice is a cutting-edge hydration formula crafted for athletes, intermittent fasters and keto-adaptive individuals. This premium blend delivers a concentrated dose of electrolytes and circulation-enhancing minerals, supporting optimal fluid balance, nutrient delivery and energy from fat stores — all without causing insulin spikes. Made free of added sugar, stimulants and artificial colors, it’s your go-to for training, recovery or focus days when hydration and metabolic control matter most.',
		benefits: [
			'Supports hydration and fluid balance during training or fasting',
			'Insulin-safe: formulated to avoid insulin spikes and support keto/fasting states',
			'Promotes improved circulation and nutrient delivery to muscle and brain',
			'Encourages energy utilization from fat stores rather than glucose',
			'Free of added sugars, artificial colors and stimulants',
			'Portable and convenient for pre-workout, intra-workout or everyday use',
		],
		ingredients: [
			'Sodium (from Sodium Chloride & Sodium Bicarbonate)',
			'Potassium (Potassium Citrate & Potassium Chloride)',
			'Magnesium Citrate',
			'Calcium Phosphate',
			'Trace Mineral Complex (Zinc, Copper, Manganese, Chromium)',
			'Natural Flavours & Sweetener (Stevia)',
			'Citric Acid',
			'Silicon Dioxide (Anti-caking Agent)',
		],
		dosage:
			'Mix one scoop (approx. 10 g) into 500 ml of water and consume either during your fast, pre-workout, or whenever you require premium hydration. Stay hydrated throughout the day.',
		category: 'supplements',
	},
	{
		id: '4',
		slug: 'mt-mass-gainer',
		name: 'Muscletech Mass Gainer',
		price: 130000,
		discountPrice: 120000,
		image: '/images/products/muscletechmasgainer.webp',
		description:
			'High-calorie mass gainer with 50g protein and complex carbs for serious muscle growth',
		longDescription:
			'Transform your physique with Mass Gainer Pro, the ultimate solution for hardgainers and serious muscle builders. Each serving delivers a complete macronutrient profile: 50g premium whey protein, 75g complex carbohydrates, and essential micronutrients to fuel muscle growth and recovery. Our scientifically-formulated blend combines fast-absorbing whey protein with slow-digesting carbs to maximize anabolic response and support intensive training. With approximately 500 calories per serving, Mass Gainer Pro provides the caloric surplus needed for muscle hypertrophy without excessive fat. The formula includes digestive enzymes for optimal nutrient absorption and reduced bloating. Perfect for post-workout nutrition, between-meal supplements, or convenient high-calorie breakfast replacements. Each 2kg container provides 20 servings of complete muscle-building nutrition. Great tasting with no gritty texture.',
		benefits: [
			'500+ calories per serving',
			'50g complete protein',
			'Complex carbohydrate blend',
			'Muscle hypertrophy support',
			'Digestive enzyme included',
			'No gritty texture',
		],
		ingredients: [
			'Whey Protein Concentrate - 50000mg',
			'Maltodextrin (Complex Carbs) - 40000mg',
			'Oat Flour (Complex Carbs) - 20000mg',
			'Coconut Oil (MCTs) - 5000mg',
			'Creatine Monohydrate - 2000mg',
			'Digestive Enzyme Blend',
			'Natural Cocoa Powder',
			'Xanthan Gum (Thickener)',
			'Stevia (Natural Sweetener)',
			'Natural Chocolate Flavor',
			'Salt',
			'Vitamins & Minerals Blend (Zinc, Magnesium, B-Vitamins)',
		],
		dosage:
			'2 scoops (100g) mixed with 400ml cold milk. Consume 30-60 minutes post-workout or between meals. Best results with 2-3 servings daily.',
		category: 'protein',
	},
	{
		id: '5',
		slug: 'AN-creatine-monohydrate-250g',
		name: 'Applied Nutrition Creatine 250g',
		price: 45000,
		discountPrice: 40000,
		image: '/images/products/AN-creatine-straw.jpg',
		description:
			'Pharmaceutical-grade creatine monohydrate for muscle strength and performance',
		longDescription:
			'Premium creatine monohydrate powder delivers 5g of pure, pharmaceutical-grade creatine per serving. Creatine is one of the most researched and proven supplements for increasing muscle strength, power output, and exercise performance. Our micronized formula ensures superior absorption and mixability. Each 250g container provides 50 servings of pure performance enhancement. Ideal for athletes, bodybuilders, and fitness enthusiasts looking to maximize their training results.',
		benefits: [
			'Increased muscle strength',
			'Enhanced ATP production',
			'Improved power output',
			'Muscle size gains',
			'Better workout performance',
			'Proven safety profile',
		],
		ingredients: [
			'Creatine Monohydrate (Micronized) - 5000mg',
			'Cellulose (Anti-caking Agent)',
			'Silicon Dioxide',
		],
		dosage:
			'5g daily (1 scoop) mixed with water or juice. Can be taken anytime during the day.',
		category: 'supplements',
	},
	{
		id: '6',
		slug: 'AN-critical-mass-6kg',
		name: 'Applied Nutrition Critical Mass 6kg',
		price: 130000,
		discountPrice: 115000,
		image: '/images/products/AN-mass.jpg',
		description: 'Premium muscle building and recovery',
		longDescription:
			'Pure whey protein isolate with 90%+ protein content and minimal lactose. Our micro-filtered formula provides fast-absorbing amino acids for optimal muscle protein synthesis. Perfect for post-workout recovery, muscle building, and daily protein needs. Each serving delivers 25g of complete protein with all essential amino acids.',
		benefits: [
			'Muscle building',
			'Fast recovery',
			'Complete amino acids',
			'Low lactose',
			'High protein content',
		],
		ingredients: [
			'Whey Protein Isolate',
			'Cocoa Powder',
			'Natural Flavors',
			'Stevia',
			'Lecithin',
		],
		dosage: '1 scoop (25g) mixed with 8oz water or milk',
		category: 'protein',
	},
	{
		id: '7',
		slug: 'enhanced-creatine-monohydrate-500g',
		name: 'Enhanced Creatine 500g',
		price: 35000,
		discountPrice: 30000,
		image: '/images/products/enhanced-creatine.jpg',
		description:
			'Pharmaceutical-grade creatine monohydrate for muscle strength and performance',
		longDescription:
			'Premium creatine monohydrate powder delivers 5g of pure, pharmaceutical-grade creatine per serving. Creatine is one of the most researched and proven supplements for increasing muscle strength, power output, and exercise performance. Our micronized formula ensures superior absorption and mixability. Each 500g container provides 60 servings of pure performance enhancement. Ideal for athletes, bodybuilders, and fitness enthusiasts looking to maximize their training results.',
		benefits: [
			'Increased muscle strength',
			'Enhanced ATP production',
			'Improved power output',
			'Muscle size gains',
			'Better workout performance',
			'Proven safety profile',
		],
		ingredients: [
			'Creatine Monohydrate (Micronized) - 5000mg',
			'Cellulose (Anti-caking Agent)',
			'Silicon Dioxide',
		],
		dosage:
			'5g daily (1 scoop) mixed with water or juice. Can be taken anytime during the day.',
		category: 'supplements',
	},
];

export const getProductBySlug = (slug: string): Product | undefined => {
	return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
	return products.filter(product => product.category === category);
};

export const getRelatedProducts = (
	productId: string,
	limit: number = 4
): Product[] => {
	const product = products.find(p => p.id === productId);
	if (!product) return [];

	return products
		.filter(p => p.category === product.category && p.id !== productId)
		.slice(0, limit);
};
