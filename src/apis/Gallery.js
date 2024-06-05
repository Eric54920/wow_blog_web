import request from "@/utils/request";

export function getGallery() {
  return request({
    url: "/gallery_list",
    method: "GET",
  });
}

export function getGalleryDetail(params) {
  return request({
    url: "/gallery_detail",
    method: "GET",
    params: params,
  });
}

