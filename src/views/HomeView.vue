<template>
	<div>
		<table class="mt-2 w-100 bg-green-100" data-aos="fade-down" style="height:500px;">
			<tr><td>
				<div class="fs-1 fw-bold">
					안녕하세요 !<br>
				</div>
				<div class="fs-3 p-2">
					개발자 백승화입니다
				</div>
			</td></tr>
		</table>
		
		<DownArrow classProps="pb-4" />
		
		<div class="row">
			<div class="col-12 col-sm-2"></div>
			<table class="col-12 col-sm-8">
				<tr>
					<td class="fs-1 fw-bold fromLeft p-4">
						저는
					</td>
				</tr>
				<tr>
					<td class="fs-2">
						<div class="p-3" data-aos="fade-down" data-aos-duration="1500">
							음악	
						</div>
						<div class="p-3" data-aos="fade-down" data-aos-duration="1500">
							교류
						</div>
						<div class="p-4" data-aos="fade-down" data-aos-duration="1500">
							그리고	
						</div>
						<div class="p-4 my-5 text-warning" data-aos="flip-left" data-aos-duration="1500">
							<i class="fa fa-quote-left fs-5" aria-hidden="true"></i>
							<span class="px-4 fs-1 fw-bold">개발</span>
							<i class="fa fa-quote-right fs-5" aria-hidden="true"></i>
						</div>
					</td>
				</tr>
				<tr>
					<td class="fs-1 fw-bold fromRight p-4">을 좋아합니다</td>
				</tr>
			</table>
			<div class="col-12 col-sm-2"></div>
		</div>
		
		<DownArrow classProps="py-5 my-5" />
		
		<div class="py-3 bg-green-100">
			<table class="w-100">
				<tr>
					<td></td>
					<td class="py-5 border-bottom border-secondary" colspan="2">
						<div class="fs-2 fw-bold">
							저는 <span class="text-danger px-2" data-aos="zoom-in-up" data-aos-duration="3000">새로운 기술</span> 역시 좋아하며,
						</div>
					</td>
					<td></td>
				</tr>
				<template v-for="(v,i) in skillList" :key="'SList'+i">
					<tr>
						<td class="px-1 px-sm-2"></td>
						<td class="fw-bold p-2">{{v.type}}</td>
						<td class="fromLeft py-3 border-bottom border-secondary" data-aos="fade-right" data-aos-duration="1500">
							<img v-for="(v2, i2) in v.img_file" :key="'imgList'+i2" :src="v2.url" class="mx-2 my-1" style="max-height: 43px;" :title="v2.name.split('.')[0]">
						</td>
						<td class="px-1 px-sm-2"></td>
					</tr>
				</template>
				<tr>
					<td></td>
					<td class="py-5 border-top border-secondary" colspan="2">
						<div class="fs-2 fw-bold">
							를 다룰 수 있습니다
						</div>
					</td>
					<td></td>
				</tr>
			</table>
		</div>
				
		<DownArrow classProps="pb-5 my-5" />
		
		<div>
			<div class="fs-1 fw-bold mb-4" data-aos="fade-down">
				가장 
				<span class="text-danger">자신있는 것</span>
				은,
			</div>
			<div class="fs-1 fw-bold py-5">
				<template v-for="(v,i) in skillList" :key="'favoriteList'+i">
					<template v-for="(v2, i2) in v.img_file" :key="'favoriteImgList'+i2">
						<div v-if="['Java', 'spring', 'jQuery', 'MySQL'].includes(v2.name.split('.')[0])" data-aos="fade-down" data-aos-duration="1500">
							<img :src="v2.url" style="height:80px;">
						</div>
					</template>
				</template>
			</div>
			<div class="fs-1 fw-bold mt-3" data-aos="fade-down">
				입니다
			</div>
		</div>
		
		<DownArrow classProps="pb-5 mt-5" />
		
	
		<table class="mt-2 w-100 bg-green-100 fs-1 fw-bold" style="height:500px;">
			<tr><td>
				<div data-aos="fade-down" data-aos-duration="1500">
					그럼 저의 작업물을 구경하러 가실까요?<br>
				</div>
				<div class="d-flex justify-content-center my-5">
					<div class="bounce d-flex justify-content-center align-items-center">
						<router-link to="/project">
							<i class="fa fa-arrow-right fa-2x text-dark" aria-hidden="true"></i>
						</router-link>
					</div>
				</div>
			</td></tr>
		</table>
	</div>
</template>

<script>
import DownArrow from '../components/DownArrow'
import AOS from 'aos'
import 'aos/dist/aos.css'
	
export default {
	name: 'HomeView',
	data() {
		return {
			skillList: [],
		}
	},
	async created() {
		AOS.init();
		const response = await fetch('https://api.allorigins.win/get?url='+encodeURIComponent('https://notion-api.splitbee.io/v1/table/5c7185230df24b6e97394f874d03f1c1'));
		const data = await response.json();
		console.log(JSON.parse(data.contents));
		this.skillList = JSON.parse(data.contents);
	},  
	components: {
		DownArrow
	},
}
</script>

<style>
	.upNDown {
		animation: pulse 1.5s infinite;
		color: #42b983;
	}
	@keyframes pulse {
		0% {
		-webkit-transform: translate(0, 0);
				transform: translate(0, 0); }
		50% {
		-webkit-transform: translate(0, 10px);
				transform: translate(0, 10px); }
		100% {
		-webkit-transform: translate(0, 0);
				transform: translate(0, 0); } 
	}
	
	.bg-green-100 {
		background-color: #d1e7dd;
	}
	
	.bounce {
		background: rgba(51, 217, 178, 1);
		box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
		border-radius: 50%;
		height: 65px;
		width: 65px;
		animation: bounce-green 1.5s infinite;	
	}
	@keyframes bounce-green {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
		}
	}
</style>