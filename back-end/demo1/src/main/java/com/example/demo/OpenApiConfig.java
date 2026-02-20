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
                        .title("科创项目后端 API demo1")
                        .version("1.0.0")
                        .description("demo1")); // 这里可以写进度，前端一眼可见
    }
}
