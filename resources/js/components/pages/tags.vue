<template>
	<div>
		<div class="content">
			<div class="container-fluid">
				<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Tags <Button @click="addModal=true"><Icon type="md-add" /></Button></p>

					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>ID</th>
								<th>Tag</th>
								<th>Created at</th>
								<th>Actions</th>
							</tr>
								<!-- TABLE TITLE -->


								<!-- ITEMS -->
							<tr>
								<td>1</td>
								<td class="_table_name">Manhattan's art center "Shed" opening ceremony</td>
								<td>Economy</td>
								<td>
                                    <Button type="info" size="small">Edit</Button>
                                    <Button type="error" size="small">Delete</Button>
								</td>
							</tr>
								<!-- ITEMS -->


						</table>
					</div>
				</div>
				 <Page :total="100" />

                <!-- modal -->
                <Modal
                    v-model="addModal"
                    title="Add Tag"
                    :mask-closable="false">
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>

                    <div slot="footer">
                        <button type="default" @click="addModal=false">Close</button>
                        <button type="primary" @click="addTag">Add</button>
                    </div>
                </Modal>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    data() {
        return {
            data: {
                tagName: '',
            },
            addModal : false,
            isAdding: false,
        }
    },
    methods: {
        // if(this.data.tagName.trim()=='') {
        //     return this.e('Tag name is required'
        //     )},
    },
}
</script>
