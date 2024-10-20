export interface Style {
  category_color?: string;
}

export interface VideInfo {
  id?: number;
  title?: string;
  url?: string;
  view_count?: number;
  player_thumb?: string;
  unformated_duration?: number;
  mobile_video_uri?: string;
  auto_play_video?: boolean;
  publisher_id?: any;
  video_category?: string;
  video_category_id?: number;
  video_channel_name?: string;
  video_channel_id?: number;
  video_publisher_name?: string;
  created_at?: string;
}

export interface Meta {
  update_date?: string;
  publish_date?: string;
  show_date?: boolean;
  publisher?: string;
  comment_count?: number;
  is_sponsored?: number;
  not_family_safe?: boolean;
}

export interface Image {
  url?: string;
  width?: number;
  height?: number;
}

export interface Url {
  web_url?: string;
  mobile_url?: string;
  share_url?: string;
  json_url?: string;
}

export interface News {
  uuid: number;
  title?: string;
  is_advertorial?: boolean;
  summary?: string;
  express_summary?: string;
  service?: string;
  timeline_category?: string;
  timeline_category_name?: string;
  category_name?: string;
  category_id?: string;
  post_type?: string;
  type?: string;
  main_image?: Image;
  header_image?: Image;
  urls?: Url;
  video_url?: string;
  style?: Style;
  meta?: Meta;
  masthead_image?: Image;
  video_info?: VideInfo;
}

export interface Filter {
  timeline_category?: string;
  timeline_category_name?: string;
  color?: string;
  color_dark?: string;
  icon_url?: string;
}

export interface ExpressResponse {
  items: News[];
  filters: Filter[];
}
