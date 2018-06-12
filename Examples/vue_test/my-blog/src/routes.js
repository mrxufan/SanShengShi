import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
export default[
	{path:'/',component:ShowBlog},
	{path:'/add',component:AddBlog},
	{path:'/blog/:id',component:SingleBlog}
]