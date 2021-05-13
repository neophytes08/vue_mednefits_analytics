<script>
/* eslint-disable */
import moment from 'moment';
import CreditTimePeriod from '../views/cards/summary/CreditTimePeriod';
import GrowthTimePeriod from '../views/cards/summary/GrowthTimePeriod';
import LifeProPlan from '../views/cards/summary/Life-pro-plan';
import ActiveUser from '../views/cards/summary/ActiveUser';
import ActiveClinic from '../views/cards/summary/ActiveClinic';
import ActiveLifePlan from '../views/cards/summary/ActiveLifePlan';
import ActiveProPlan from '../views/cards/summary/ActiveProPlan';
import CreditUsed from '../views/cards/summary/CreditUsed';
import CreditAllocated from '../views/cards/summary/CreditAllocated';
import BarGraph from '../views/cards/summary/Bar-graph';
import DateFilter from '../views/custom-plugin/DateFilter';

	var home = {
		components: {
			BarGraph,
			CreditTimePeriod,
			GrowthTimePeriod,
			LifeProPlan,
			ActiveUser,
			ActiveClinic,
			ActiveLifePlan,
			ActiveProPlan,
			CreditUsed,
			CreditAllocated,
			DateFilter
		},
		data() {
			return {
				user_data : {},
				start_date : moment(),
      	end_date : moment(),
			}
		},
		created() {

		},
		methods: {
			setDateFilter( dates ){
				console.log( dates );
	      this.start_date = dates.filter.start;
	      this.end_date = dates.filter.end;
	      this.$refs.activeUser.getActiveUsers( this.start_date, this.end_date );
	      this.$refs.activeClinic.getActiveClinics( this.start_date, this.end_date );
	      this.$refs.activeLifePlan.getActivePlan( this.start_date, this.end_date );
	      this.$refs.activeProPlan.getActivePlan( this.start_date, this.end_date );
	      this.$refs.creditAllocated.getAllocatedCredits( this.start_date, this.end_date );
	      this.$refs.creditUsed.getUsedCredits( this.start_date, this.end_date );
	    }
	  }
	}

	export default home
</script>


<style lang="scss" scoped>
	@import './src/assets/css/home.scss';
	@import './src/assets/css/summary-active-cards.scss';
</style>

