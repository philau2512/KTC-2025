import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import { thunk } from "redux-thunk";
import type { ThunkMiddleware } from "redux-thunk";

import type { AuthActionTypes } from "../types/authTypes";
import { rootReducer } from "../reducers/rootReducer";

// Định nghĩa kiểu dữ liệu RootState dựa trên kết quả trả về của rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Tạo và xuất store Redux
export const store = createStore(
  rootReducer, // Sử dụng rootReducer để quản lý state
  undefined, // Không có state ban đầu (preloadedState = undefined)
  applyMiddleware(
    thunk as ThunkMiddleware<RootState, AuthActionTypes> // Áp dụng middleware thunk để hỗ trợ các action bất đồng bộ
  )
);
