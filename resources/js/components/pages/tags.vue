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
							<tr v-for="(tag, i) in tags" :key="i" v-if="tags.length">
								<td>{{ tag.id }}</td>
								<td class="_table_name">{{ tag.tagName }}</td>
								<td>{{ tag.created_at }}</td>
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
                    :mask-closable="false"
                    :closable="false">

                    <input v-model="data.tagName" placeholder="Enter something" />
                    <div slot="footer">
                        <button type="default" @click="addModal=false">Close</button>
                        <button type="primary" @click="addTag" :disabled="isAdding" :loading="isAdding">{{ isAdding ? 'Adding...' : 'add tag' }}</button>
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
            tags : [],
        }
    },
    methods: {
        async addTag(){
            if(this.data.tagName.trim()=='') {
            return this.e('Tag name is required')
            const res= await this.callApi('post', 'admin/tag/create', this.data)
            if(res.status === 200){
                this.s('Tag has been added successfully!')
                this.addModal = false
            }
            }
        },

    },
    async created(){
            const res = await this.callApi('get', 'admin/tags')
                if(res.status==200){
                    this.tags = res.data
                }else{
                    this.swr();
                }

    },
}
</script>
