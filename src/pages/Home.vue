<template>
  <AppMasthead :class="$style.hero">
    <div>
      <div ref="figure" :class="$style.container">
        <div :class="$style.block">
          <BaseTitle>Term life insurance reimaged for your family’s life.</BaseTitle>
          <BaseText>We’re taking term life insureance to a whole new place. If the worst happens, know that we have your family covered.</BaseText>
          <router-link :class="$style.start" :to="{ name: 'QQuote' }">Get Started</router-link>
        </div>
      </div>
      <figure :class="$style.figure">
        <img ref="hero" :class="$style.img" src="@/assets/imgs/mastheads/homepage.jpg" />
      </figure>
    </div>
  </AppMasthead>
  <AppSection :class="$style.forest">
    <div :class="$style['lg:container']">
      <div :class="$style['lg:block']">
        <span :class="$style['block__eyebrow']">How We Compare</span>
        <div :class="$style['block__content']">
          <div :class="$style['block__title']">
            <BaseTitle as="h2">Advantages of dayforward term life insurance.</BaseTitle>
          </div>
          <ul :class="$style['block__list']">
            <li :class="$style.col">
              <span>Coverage starting day on your first day.</span>
            </li>
            <li :class="$style.col">
              <div :class="$style['col__header']">
                <BaseTitle as="h3">12k-500<span :class="$style.tail">k</span></BaseTitle>
              </div>
              <hr :class="$style.hr" />
              <div :class="$style['col__text']">
                <BaseTitle as="h4">Protection</BaseTitle>
                <BaseText>We protect up to 500k of yearly income up to 10M on day 1.</BaseText>
              </div>
            </li>
            <li :class="$style.col">
              <div :class="$style['col__header']">
                <BaseTitle as="h3">10-27<span :class="$style.tail">yrs</span></BaseTitle>
              </div>
              <hr :class="$style.hr" />
              <div :class="$style['col__text']">
                <BaseTitle as="h4">Provide</BaseTitle>
                <BaseText>We provide benefits for your loved ones for a range of terms.</BaseText>
              </div>
            </li>
            <li :class="$style.col">
              <div :class="$style['col__header']">
                <BaseTitle as="h3" >18-26<span :class="$style.tail">yrs</span></BaseTitle>
              </div>
              <hr :class="$style.hr" />
              <div :class="$style['col__text']">
                <BaseTitle as="h4">Ages</BaseTitle>
                <BaseText>Depeding on your policy we protect your children for the full term..</BaseText>
              </div>
            </li>
            <li :class="$style.col">
              <div :class="$style['col__header']">
                 <BaseTitle as="h3">18-50</BaseTitle>
              </div>
             <hr :class="$style.hr" />
              <div :class="$style['col__text']">
                <BaseTitle as="h4">Coverage</BaseTitle>
                <BaseText>If your between the ages of 18-50 you can qualify for coverage.</BaseText>
              </div>
            </li>
            <li :class="$style.col">
              <div :class="$style['col__header']">
                <BaseTitle as="h3">~10<span :class="$style.tail">m</span></BaseTitle>
              </div>
              <hr :class="$style.hr" />
              <div :class="$style['col__text']">
                <BaseTitle as="h4">Flexable</BaseTitle>
                <BaseText>Your policy grows as your family grows. No need to apply for new coverage.</BaseText>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div style="text-align: center;">
        <router-link :class="$style['col__btn']" :to="{ name: 'Why' }">Learn More</router-link>
      </div>
    </div>
  </AppSection>
  <AppSection>
    <div :class="$style.wrap">
      <figure :class="$style.thumb">
        <img ref="thumb" src="@/assets/imgs/family_one.png" />
      </figure>
      <div :class="$style.content">
        <div :class="$style.text">
          <BaseTitle as="h2">Protect your income.</BaseTitle>
          <BaseText>Imagine what would happen if you passed away and your family wasn't getting your income anymore? Or if you rely on someone financially, and they were to die tomorrow? Dayforward life insurance offers 10-27 year term options to help make sure more families can create the financial security they deserve.</BaseText>
          <router-link :class="$style.start" :to="{ name: 'QQuote' }">Get Started</router-link>
        </div>
      </div>
    </div>
  </AppSection>
  <AppSection>
    <div :class="[$style.grid, $style['grid-coloums-12'], $style['lg:gap'], $style['max'], $style['lg:pb']]">
      <div :class="[$style.cols, $style['cols-span-4']]">
        <figure style="margin-bottom: 3rem;">
          <img src="@/assets/imgs/dayforward_two.jpg" />
        </figure>
        <BaseText>Income helps create financial security for the people you love. It typically covers everyday expenses and paves a path for the future.</BaseText>
      </div>
      <div :class="[$style.cols, $style['cols-span-4']]">
        <figure style="margin-bottom: 3rem;">
          <img src="@/assets/imgs/dayforward_three.jpg" />
        </figure>
        <BaseText>If you die without life insurance, your family would lose your income, which could result in financial troubles and a change in their way of life.</BaseText>
      </div>
      <div :class="[$style.cols, $style['cols-span-4']]">
        <figure style="margin-bottom: 3rem;">
          <img src="@/assets/imgs/dayforward_four.jpg" />
        </figure>
        <BaseText>We simply replace your income when you die, so your family can continue receiving money twice a month, just like a paycheck. Plus, if you have kids, you can customize it so you can provide for them until they’re 18, 21, or even 26.</BaseText>
      </div>
    </div>
  </AppSection>
  <AppSection :class="$style.forest">
    <div :class="[$style.grid, $style['grid-coloums-12'],  $style['lg:pt'], $style['lg:pb'], $style.max]">
      <div :class="$style['cols-span']">
        <BaseTitle as="h2">A customizable policy for peace of mind.</BaseTitle>
        <BaseText>With modern technology, we make it simple for you to find the coverage you need without the guesswork, wait times or outdated paperwork.</BaseText>
      </div>
      <ul :class="[$style.grid, $style['grid-coloums-12'], $style['lg:gap'], $style.ul, $style['cols-span']]">
        <li :class="[$style.grid, $style['cols-span-6']]">
          <BaseTitle as="h3" size="sm">Online checkout</BaseTitle>
          <BaseText>A lot of people can checkout with their policy all online! But if you’re someone who loves to chat, our life insurance advisors can help find you coverage that fits your budget and needs.</BaseText>
        </li>
        <li :class="[$style.grid, $style['cols-span-6']]">
          <BaseTitle as="h3" size="sm">Fast Decisions</BaseTitle>
          <BaseText>Our online application process is quick and easy. And our approval decisions are usually instant or within 1 day. Other life insurance companies can typically take weeks.</BaseText>
        </li>
        <li :class="[$style.grid, $style['cols-span-6']]">
          <BaseTitle as="h3" size="sm">Flexible add-ons</BaseTitle>
          <BaseText>With a Dayforward policy, if you get a raise or have a new child, you can update your coverage through riders to reflect your life changes. All with pre-set pricing. Certain conditions & limitations apply.</BaseText>
        </li>
        <li :class="[$style.grid, $style['cols-span-6']]">
          <BaseTitle as="h3" size="sm">Reinsured policies</BaseTitle>
          <BaseText>All Dayforward policies are reinsured by MunichRe (A+ rating from A.M. Best), one of the largest reinsurance companies in the world. Plus, we’re backed by large financial institutions.</BaseText>
        </li>
      </ul>
    </div>
  </AppSection>
  <AppSection>
    <div :class="[$style.grid, $style.max, $style['lg:pt']]">
      <span :class="[$style['block__eyebrow']]">As Seen In</span>
      <div :class="[$style.grid, $style['grid-coloums-12'], $style['cols-span'], $style['lg:gap'], $style['md:mt']]">
        <figure :class="$style['cols-span-3']">
          <img src="@/assets/imgs/logos/wsj.png" width="272"/>
        </figure>
        <figure :class="$style['cols-span-3']">
          <img src="@/assets/imgs/logos/college_advisor.png" width="161"  />
        </figure>
        <figure :class="$style['cols-span-3']">
          <img src="@/assets/imgs/logos/forbes.png" width="133" />
        </figure>
        <figure :class="$style['cols-span-3']">
          <img src="@/assets/imgs/logos/business_insider.png" width="318" />
        </figure>
      </div>
    </div>
    <div :class="$style['lg:container']">
      <div :class="$style['lg:block']">
        <span :class="$style['block__eyebrow']">Google Reviews</span>
        <div :class="$style['block__content']">
          <div :class="$style['block__title']">
            <BaseTitle as="h2">We’re proud of our 5-star rating.</BaseTitle>
            <BaseText>Don't just take our word for it, read what some of our happy policyholders have to say.</BaseText>
          </div>
          <ul :class="$style['block__list']">
            <li :class="[$style.grid, $style.cols, $style['cols-span-6']]">
              <div>
                <svg width="120" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27ZM35 15.27 41.18 19l-1.64-7.03L45 7.24l-7.19-.61L35 0l-2.81 6.63-7.19.61 5.46 4.73L28.82 19 35 15.27ZM60 15.27 66.18 19l-1.64-7.03L70 7.24l-7.19-.61L60 0l-2.81 6.63-7.19.61 5.46 4.73L53.82 19 60 15.27ZM85 15.27 91.18 19l-1.64-7.03L95 7.24l-7.19-.61L85 0l-2.81 6.63-7.19.61 5.46 4.73L78.82 19 85 15.27ZM110 15.27l6.18 3.73-1.64-7.03L120 7.24l-7.19-.61L110 0l-2.81 6.63-7.19.61 5.46 4.73-1.64 7.03 6.18-3.73Z" fill="#FCCB03"/></svg>
                <BaseText>Dayforward made purchasing protection for my family effortless. I felt valued, respected, and listened to as a customer. The agent worked with me to determine a level of coverage that was affordable and addressed the needs of my loved ones."</BaseText>
              </div>
              <div :class="$style.meta">
                <span :class="$style.name">Jessica</span>
                <span :class="$style.city">Tomball, TX</span>
              </div>
            </li>
            <li :class="[$style.grid, $style.cols, $style['cols-span-6']]">
              <div>
                <svg width="120" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27ZM35 15.27 41.18 19l-1.64-7.03L45 7.24l-7.19-.61L35 0l-2.81 6.63-7.19.61 5.46 4.73L28.82 19 35 15.27ZM60 15.27 66.18 19l-1.64-7.03L70 7.24l-7.19-.61L60 0l-2.81 6.63-7.19.61 5.46 4.73L53.82 19 60 15.27ZM85 15.27 91.18 19l-1.64-7.03L95 7.24l-7.19-.61L85 0l-2.81 6.63-7.19.61 5.46 4.73L78.82 19 85 15.27ZM110 15.27l6.18 3.73-1.64-7.03L120 7.24l-7.19-.61L110 0l-2.81 6.63-7.19.61 5.46 4.73-1.64 7.03 6.18-3.73Z" fill="#FCCB03"/></svg>
                <BaseText>I found the best coverage at the best rate and I found it at Dayforward. I have peace of mind knowing my family will be taken care of."</BaseText>
              </div>
              <div :class="$style.meta">
                <span :class="$style.name">Shawn</span>
                <span :class="$style.city">Houston, TX</span>
              </div>
            </li>
            <li :class="[$style.grid, $style.cols, $style['cols-span-6']]">
              <div>
                <svg width="120" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27ZM35 15.27 41.18 19l-1.64-7.03L45 7.24l-7.19-.61L35 0l-2.81 6.63-7.19.61 5.46 4.73L28.82 19 35 15.27ZM60 15.27 66.18 19l-1.64-7.03L70 7.24l-7.19-.61L60 0l-2.81 6.63-7.19.61 5.46 4.73L53.82 19 60 15.27ZM85 15.27 91.18 19l-1.64-7.03L95 7.24l-7.19-.61L85 0l-2.81 6.63-7.19.61 5.46 4.73L78.82 19 85 15.27ZM110 15.27l6.18 3.73-1.64-7.03L120 7.24l-7.19-.61L110 0l-2.81 6.63-7.19.61 5.46 4.73-1.64 7.03 6.18-3.73Z" fill="#FCCB03"/></svg>
              <BaseText>People aren't doing business like their parents or grandparents anymore, so why wouldn't you choose an innovative company that's changing as we change as a society? Signing up was easy and quick; my rep was very knowledgeable and friendly."</BaseText>
              </div>
              <div :class="$style.meta">
                <span :class="$style.name">Ana</span>
                <span :class="$style.city">Houston, TX</span>
              </div>
            </li>
            <li :class="[$style.grid, $style.cols, $style['cols-span-6']]">
              <div>
                <svg width="120" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27ZM35 15.27 41.18 19l-1.64-7.03L45 7.24l-7.19-.61L35 0l-2.81 6.63-7.19.61 5.46 4.73L28.82 19 35 15.27ZM60 15.27 66.18 19l-1.64-7.03L70 7.24l-7.19-.61L60 0l-2.81 6.63-7.19.61 5.46 4.73L53.82 19 60 15.27ZM85 15.27 91.18 19l-1.64-7.03L95 7.24l-7.19-.61L85 0l-2.81 6.63-7.19.61 5.46 4.73L78.82 19 85 15.27ZM110 15.27l6.18 3.73-1.64-7.03L120 7.24l-7.19-.61L110 0l-2.81 6.63-7.19.61 5.46 4.73-1.64 7.03 6.18-3.73Z" fill="#FCCB03"/></svg>
                <BaseText>They have given me peace of mind knowing my son will be taken care of when I’m gone."</BaseText>
              </div>
              <div :class="$style.meta">
                <span :class="$style.name">Evonne</span>
                <span :class="$style.city">San Antonio, TX</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div style="text-align: center;">
        <router-link :class="[$style['col__btn'], $style['btn--light']]" :to="{ name: 'Why' }">Learn More</router-link>
      </div>
    </div>
  </AppSection>
  <AppSection>
    <div style="position: relative; height: 918px; display: grid; align-items: end;">

      <div :class="[$style.box, $style.grid, $style['grid-coloums-12'], $style.relative, $style['index-2'], $style.max, $style['bg-cream']]">
        <div :class="$style['cols-span']">
          <BaseTitle as="h2">Get life insurance coverage for your family as soon as today!</BaseTitle>
          <BaseText>If approved, you can help create financial security for the people you love.</BaseText>
        </div>
        <ul :class="[$style.grid, $style['grid-coloums-12'], $style['lg:gap'], $style.ul, $style['cols-span']]">
          <li :class="$style['cols-span-4']">
            <div>
              <span :class="$style.badge">1</span>
              <BaseTitle as="h3" size="sm">Online Interview</BaseTitle>
              <BaseText>Apply in minutes by completing the online interview to see your personalized coverage and price options.</BaseText>
            </div>
          </li>
          <li :class="$style['cols-span-4']">
            <div>
              <span :class="$style.badge">2</span>
              <BaseTitle as="h3" size="sm">Choose Coverage</BaseTitle>
              <BaseText>Select the coverage you want for your family, then sign and submit your online application for review.</BaseText>
            </div>
          </li>
          <li :class="$style['cols-span-4']">
            <div>
              <span :class="$style.badge">3</span>
              <BaseTitle as="h3" size="sm">Buy Your Policy</BaseTitle>
              <BaseText>If approved, we’ll process your payment and issue your policy to make it official!</BaseText>
            </div>
          </li>
        </ul>
        <div :class="[$style['cols-span'], $style['center']]">
          <router-link :class="$style.start" :to="{ name: 'QQuote' }">Get Started</router-link>
        </div>
      </div>
      <div :class="$style.bg"></div>
    </div>
  </AppSection>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import AppMasthead from '../components/AppMasthead.vue';
import AppSection from '../components/AppSection.vue';
import BaseText from '../components/BaseText.vue';
import BaseTitle from '../components/BaseTitle.vue';

const figure = ref(null);
const hero = ref(null);
const thumb = ref(null);

onMounted(() => {
  window.addEventListener('scroll', () => {
    requestAnimationFrame(function(){
      let zoom = window.scrollY / (figure.value.offsetTop * 10) + 1;
      if (zoom < 1.8) hero.value.style.transform = `scale(${zoom})`;

      const shrink = (thumb.value.getBoundingClientRect().y / window.scrollY * .6) + 1;
      if (shrink > 1 && shrink < 2) thumb.value.style.transform = `scale(${shrink})`;
    });
  });
})
</script>

<style module>

.ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.absolute {
  position: absolute;
}
.grid {
  display: grid;
}

.grid-coloums-12 {
  grid-template-columns: repeat(12,minmax(0,1fr));
}

.relative {
  position: relative;
}

.center {
  text-align: center;
}

.index-2 {
  z-index: 2;
}
.max {
  max-width: 1120px;
  margin-right: auto;
  margin-left: auto;
}

.md\:mt {
  margin-top: 60px;
}

.lg\:gap {
  gap: 60px;
}

.lg\:pt {
  padding-top: 10rem;
}

.lg\:pb {
  padding-bottom: 10rem;
}

.cols {}

.cols-span-3 {
  grid-column: span 3/span 3;
}
.cols-span-4 {
  grid-column: span 4/span 4;
}

.cols-span-6 {
  grid-column: span 6/span 6;
}
.cols-span {
  grid-column: -1;
}

.hero {
  position: relative;
  overflow: hidden;
}

.box\:img {
  max-width: 100%;
}

.container {
  position: absolute;
  display: grid;
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  grid-template-columns: repeat(12,minmax(0,1fr));
}

.block {
  grid-column: span 8/span 8;
  background: var(--background);
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-right: 6rem;
}

.start {
  background: #2C6DF3;
  color: var(--cream);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 24px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: .04rem;
}

.forest {
  background: #1F394D;
  color: var(--cream);
}

.lg\:container {
  padding-top: 10rem;
  padding-bottom: 10rem;
  max-width: 1120px;
  margin: 0 auto;
}
.box\:container {
  position: relative;
  padding-top: 10rem;
  padding-bottom: 10rem;
}
.lg\:block {
  display: grid;
  grid-template-columns: repeat(12,minmax(0,1fr));
}

.block__content {
  display: grid;
  grid-column-start: 3;
  grid-column-end: -1;
  grid-template-columns: repeat(10,minmax(0,1fr));
}

.block__eyebrow {
  position: relative;
  grid-column: span 2 / span 2;
  margin-top: 26px;
  opacity: .4;
  text-transform: uppercase;
  font-size: .75rem;
}

.block__eyebrow::after {
  content: '';
  position: absolute;
  top: 8px;
  right: 36px;
  display: inline-block;
  width: 24px;
  height: 1px;
  background: currentColor;
}

.block__title,
.block__list {
  grid-column: span 10/span 10;
}

.block__title {
  margin-bottom: 6rem;
}
.block__list {
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(12,minmax(0,1fr));
  gap: 60px;
}
.col {
  grid-column: span 4/span 4;
}

.hr {
  border-top: 0;
  opacity: .3;
  margin-bottom: 1.5rem;
}
.col__text {
  opacity: .7;
}
.wrap {
  display: flex;
  position: relative;
  padding-top: 10rem;
  padding-bottom: 10rem;
}

.thumb {
  width: 50%;
  align-items: center;
  transform: translateX(-20%);
  overflow: hidden;
}

.thumb img {
  transform: scale(1.2);
}

.content {
  position: absolute;
  max-width: 1120px;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: grid;
  height: 100%;
  align-items: center;
  grid-template-columns: repeat(12,minmax(0,1fr));
}

.text {
  grid-column-start: 6;
  grid-column-end: -1;
}

.tail {
  font-size: 28px;
  font-weight: 500;
}

.col__btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255, .2);
  border: 0;
  padding: 12px 24px;
  border-radius: 24px;
  min-width: 166px;
  color: var(--sand);
  margin: 3rem auto 0 auto;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: .04rem;
  font-size: .875rem;
  transition: background-color 230ms ease-in-out, color 230ms;
}

.col__btn:hover {
  background: var(--cream);
  color: var(--primary);
}

.name {
  margin-top: 3rem;
  display: block;
  font-weight: bold;
}

.city {
  opacity: .7;
  font-size: .875rem;
}

.meta {
  display: grid;
  align-content: end;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/imgs/dayforward_five.jpg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-cream {
  background: var(--cream);
}

.box {
  padding: 60px 60px 0 60px;
  transform: translateY(60px);
}

.figure {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  object-fit: cover;
  position: absolute;
  transform: translateX(38%);
  overflow: hidden;
}

.figure img {
  object-fit: cover;
  height: 100%;
  transform: scale(1);
}

.btn--light {
  background: rgba(0, 0, 0, .075);
  transition: background-color 230ms ease-in-out, color 230ms;
}

.btn--light:hover {
  background: var(--primary);
  color: var(--cream);
}

.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  background: var(--primary);
  width: 62px;
  height: 62px;
  color: var(--cream);
  border-radius: 50%;
  margin-bottom: 12px;
}
</style>
