import { getProperties } from "@ember/object";
import UserIndexRoute from "./UserIndexRoute";
import InfiniteScrollOffsetMixin from "./mixins/infinite-scroll/offset";
import RefreshRouteMixin from "./mixins/refresh";


export default UserIndexRoute.extend( InfiniteScrollOffsetMixin, RefreshRouteMixin, {
	itemSelector: ".channel-item-component",
	modelName: "twitchChannelFollowed",
	modelMapBy: "channel",
	modelPreload: "logo",

	queryParams: {
		sortby: {
			refreshModel: true
		},
		direction: {
			refreshModel: true
		}
	},


	model({ sortby = "created_at", direction = "desc" }) {
		return this._super({ sortby, direction });
	},

	fetchContent() {
		const params = getProperties( this.controller, "sortby", "direction" );

		return this.model( params );
	}
});
