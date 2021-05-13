<template>
  <div class="home-container-wrapper">
    <div class="home-container">
      <!-- -->
      <div>
        <div class="data-mednefits-box">
          <!-- credit time Period -->
          <CreditTimePeriod></CreditTimePeriod>
        </div>
        <!-- Active cards -->
        <div class="data-mednefits-box">
        	<div class="status-wrapper">
            <div class="status-box">
	        		<ActiveUser ref="activeUser"></ActiveUser>
            </div>
            <div class="status-box">
	        		<ActiveLifePlan ref="activeLifePlan"></ActiveLifePlan>
            </div>
            <div class="status-box">  
	        		<ActiveClinic ref="activeClinic"></ActiveClinic>
            </div>
	        	<div class="status-box">
            	<ActiveProPlan ref="activeProPlan"></ActiveProPlan>
            </div>
	        	<div class="status-box">
            	<CreditAllocated ref="creditAllocated"></CreditAllocated>
            </div>
	        	<div class="status-box">
            	<CreditUsed ref="creditUsed"></CreditUsed>
            </div>
        	</div>
          <DateFilter ref="dateFilter" @filterChanged="setDateFilter"></DateFilter>
        </div>
      </div>
      <!--  -->
      <div>
        <!-- Growth time period -->
        <div class="data-mednefits-box">
          <GrowthTimePeriod></GrowthTimePeriod>
        </div>
        <!-- life Pro plan  -->
        <div class="data-mednefits-box">
          <LifeProPlan></LifeProPlan>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import home from "@/components/home";
export default home;
</script>
