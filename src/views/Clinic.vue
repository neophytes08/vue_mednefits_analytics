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
          <BarGraph></BarGraph>
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
import clinic from "@/components/clinic";
export default clinic;
</script>
