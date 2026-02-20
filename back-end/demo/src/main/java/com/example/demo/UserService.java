package com.example.demo;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    public User getUserById(Long id) {
        // 真实代码里这里查数据库
        // 现在不需要写，因为测试里我们会 "拦截" 这个方法
        return null;
    }
}