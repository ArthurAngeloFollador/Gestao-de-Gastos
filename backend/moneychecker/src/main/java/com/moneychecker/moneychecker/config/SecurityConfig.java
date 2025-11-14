package com.moneychecker.moneychecker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> auth.anyRequest().permitAll() // Permitir todas as requisições
        ).csrf(csrf -> csrf.disable()) // Desabilitar CSRF
                .formLogin(form -> form.disable()) // Desabilitar o formulário de login padrão
                .httpBasic(basic -> basic.disable()) // Desabilitar autenticação básica
                .headers(headers -> headers.frameOptions(frame -> frame.disable()) // Desabilitar X-Frame-Options
                );

        return http.build();
    }
}