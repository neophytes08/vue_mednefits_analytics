<script>
/* eslint-disable */
import BarGraph from '../views/cards/summary/Bar-graph';
import ActiveRegistered from '../views/cards/user/Active-registered';
import Demography from '../views/cards/user/Demography';
import Location from '../views/cards/user/Location';
import Platform from '../views/cards/user/Platform';

	var user = {
		components: {
			BarGraph,
			ActiveRegistered,
			Demography,
			Location,
			Platform,
		},
		data() {
			return {
				user_data : {},
			}
		},
		created() {

		}
	}

	export default user
</script>


<style lang="scss" scoped>
	@import './src/assets/css/home.scss';
</style>

