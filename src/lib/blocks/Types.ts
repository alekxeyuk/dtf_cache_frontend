export type Block = {
    type: string;
    data: TextBlock | HeaderBlock | DelimiterBlock | LinkBlock | MediaBlock | VideoBlock;
    cover: boolean;
    hidden: boolean;
    anchor: string;
};

export type HeaderBlock = {
    text: string;
    style: string;
};

export type TextBlock = {
    text: string;
    text_truncated: string;
};

export type DelimiterBlock = {
    type: string;
};

export type LinkBlock = {
    link: LinkClass;
};

export interface LinkClass {
    type: string;
    data: LinkData;
};

export interface LinkData {
    url:         string;
    title:       string;
    description: string;
    image:       Image;
    v:           number;
};

export interface Image {
    type: string;
    data: ImageData;
};

export interface ImageData {
    uuid:             string;
    width:            number;
    height:           number;
    size:             number;
    type:             string;
    color:            string;
    hash:             string;
    external_service: [];
};

export interface MediaBlock {
    items:           MediaItem[];
    with_background: boolean;
    with_border:     boolean;
}

export interface MediaItem {
    title:  string;
    author: string;
    image:  Image;
}

export interface VideoBlock {
    video: VideoClass;
    title: string;
}

export interface VideoClass {
    type: string;
    data: VideoData;
}

export interface VideoData {
    thumbnail:        Image;
    width:            number;
    height:           number;
    time:             number;
    external_service: ExternalService;
}

export interface ExternalService {
    name: string;
    id:   string;
}