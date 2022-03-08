<template>
	<div id="app">
		<div class="container-fluid">
			<div class="row">
				<div class="col-3 bg-dark">
					<Table></Table>
				</div>
				<div class="col-9 text-primary">
					<Calendar></Calendar>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Table from '../components/Table'
import Calendar from '../components/Calendar'
export default {
	name: "IndexPage",
  components: {
    Table,
    Calendar,
  },
}
</script>
