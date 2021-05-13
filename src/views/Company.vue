<template>
  <div class="home-container-wrapper">
    <div class="home-container">
      <!-- left box -->
      <div>
        <div class="data-mednefits-box">
          <!-- credit time Period -->
          <BarGraph></BarGraph>
        </div>
        <!-- Growth time period -->
        <div class="data-mednefits-box">
          <BarGraph></BarGraph>
        </div>
      </div>
      <!-- right box -->
      <div>
        <!-- Active cards -->
        <div class="data-mednefits-box">
        	<div class="status-wrapper">
        		<div class="user-lifeplan-container">
        		</div>
        		<div class="clinic-proplan-container">
        		</div>
        		<div class="allocated-user-container">
        		</div>
        	</div>
        </div>
        <!-- life Pro plan  -->
        <div class="data-mednefits-box">
          <BarGraph></BarGraph>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import company from "@/components/company";
export default company;
</script>
