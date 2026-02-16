package com.example.demo;


import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("科创项目后端 API")
                        .version("1.0.0")
                        .description("后端进度：已完成基础用户接口，正在对接 ETH 通讯模块。")); // 这里可以写进度，前端一眼可见
    }
}
