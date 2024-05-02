import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=' w-[70%] ml-[180px] h-4/5 mt-[40px] sm:grid-cols-1'>
        <div className='flex gap-6'>
        <p className='h-7 w-15 bg-red-300 font-bold'>Food</p>
        <p>April 11, 2024</p>
        </div>
        <div>
            <h1 className='font-bold text-4xl mt-6'>unleash the graet tast <br /> food</h1>
        </div>
        <div>
            <Image src='/fruits.jpg' alt='art' width='800' height='400' className='w-[100%] ml-[7px] mt-24 h-[600px]'/>
        </div>
        <div>
            <h2 className='font-bold mt-10 mb-4'>Up-coming food bloggers, you need to watch </h2>
            <p>
Food is what people, plants and animals eat to live. Every organism needs energy to carry on with the process of living which comes from food. Food usually comes from animals and plants. It is eaten by living things to provide energy and nutrition.Food contains the nutrition that people and animals need to be healthy. The consumption of food is normally enjoyable to humans.

It contains protein, fat, carbohydrates, vitamins, water and minerals Liquids used for energy and nutrition are often called drinks If someone cannot afford food they go hungry Originally, people got food as hunter-gatherers. The agricultural revolution changed that. Farmers grew crops including those invented and improved by selective breeding.These improvements, for example the invention of maize, allowed feeding more people, and further improvements gave it a better taste


Further more Food shortage has been a big problem throughout history. Many people do not have enough money to buy the food that they need. Bad weather or other problems sometimes destroy the growing food in one part of the world. When people do not have enough food, we say that they are hungry. If they do not eat enough food for a long time, they will become sick and die from starvation. In areas where many people do not have enough food, we say that there is famine there.

Food and water can make people sick if it is contaminated by microorganisms, bad metals, or chemicals</p>
        </div>
        <div className='mt-14'>
            <ol>
                <li><span className='font-bold'>.</span> If people do not eat the right foods, they can become sick.</li>
                <li><span className='font-bold'>.</span> If people do not eat enough protein, they get the disease called kwashiorkor.</li>
                <li><span className='font-bold'>.</span> If they do not eat enough vitamin B1 (thiamine), they get the disease called beriberi</li>
                <li><span className='font-bold'>.</span>If children do not eat enough vitamin D, they get the disease called rickets </li>
            </ol>
            <p className='mt-16'>People may often have a variety of eating disorders that cause them to either eat too much, or not be able to eat certain things or amounts. Common diseases like Coeliac disease or food allergies cause people to experience ill effects from consuming certain foods that are normally safe. If people eat too much food, they can become overweight or obese. This causes numerous health problems. On the other hand, eating too little food, from lack of access or anorexia could cause malnutrition. Therefore, people have to balance the amount, the nutrition, and the type of food to be healthy.

Food in religions.

Many cultures or religions have food taboos. That means they have rules what people should not eat, or how the food has to be prepared

Examples of religious food rules are the Kashrut of Judaism and the Halal of Islam, that say that pig meat cannot be eaten. In Hinduism, eating beef is not allowed. Some Christians are vegetarian someone who does not eat meat because of their religious beliefs. For example, Seventh-day Adventist Church recommends vegetarianism.

In addition, sometime beliefs do not relate to the religion but belong to the culture.Food for humans is mostly made through farming or gardening. It includes animal and vegetable sources. Some people refuse to eat food from animal origin, like meat, eggs, and products with milk in them. Not eating meat is called vegetarianism. Not eating or using any animal products is called veganism.

Basic foods consumed by humans.

Plant source Animal source. </p>
        </div>
        <div className='w-[100%] ml-[7px] mt-10 h-[600px]'>
        <iframe width="1100" height="600" src="https://www.youtube.com/embed/n6lT7bR062c?si=ZMvgAyJFGV4GHFXp&amp;start=12" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


        </div>
        <div className='mt-20'>
            <h2 className='font-bold'>10 tell-tale signs you need to get a new food</h2>
            <p className='mt-4'>Fruit.

Vegetables.

Grains.

Seeds.

Legumes (Beans, peas, lentils, etc.).

Herbs.

Spices.

Meat.

Seafood.

Eggs.

Dairy products.

Food produced by farmers or gardeners can be changed by industrial processes (the food industry). Processed food usually contains several natural ingredients and food additives (such as preservatives, antioxidants, emulsifiers, flavor enhancers). For example, bread is processed food.

Food can also be prepared and served in restaurants or refectory (in particular for children in school).

The utensils used may be a plate, knife, fork, chopsticks, spoon, bowl, or spork.

Many people do not grow their own food. They have to buy food that was grown by someone else. People buy most of their food in shops or markets. But some people still grow most or all of their own food.

People may buy food and take it home to cook it. They may buy food that is ready to eat from a street vendor or a restaurant.

Other countries have their own way of eating food. An example of an ethnic food is Mexican food.

Production of food. </p>
        </div>
        <div className='mt-14 bg-yellow-300 p-12'>
            <p>People may buy food and take it home to cook it. They may buy food that is ready to eat from a street vendor or a restaurant.

Other countries have their own way of eating food. An example of an ethnic food is Mexican food.

Production of food.</p>
        </div>
        <div className='mt-16 mb-14'>
            <p>Many cultures or religions have food taboos. That means they have rules what people should not eat, or how the food has to be prepared

Examples of religious food rules are the Kashrut of Judaism and the Halal of Islam, that say that pig meat cannot be eaten. In Hinduism, eating beef is not allowed. Some Christians are vegetarian (someone who does not eat meat) because of their religious beliefs. For example, Seventh-day Adventist Church recommends vegetarianism.

In addition, sometime beliefs do not relate to the religion but belong to the culture
.</p>
        </div>
</div>
)
}


