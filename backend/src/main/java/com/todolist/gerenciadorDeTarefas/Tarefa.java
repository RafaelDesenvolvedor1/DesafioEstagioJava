package com.todolist.gerenciadorDeTarefas;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String titulo;
    private String descricao;
    private boolean concluido;


    public Tarefa(){}

    public Tarefa(long id, String titulo, String descricao){
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluido = false;
    }

    public long getId(){
        return this.id;
    }

    public void setid(long id){
        this.id = id;
    }
    public String getTitulo(){
        return this.titulo;
    }

    public void setTitulo(String titulo){
        this.titulo = titulo;
    }
    public String getDescricao(){
        return this.descricao;
    }

    public void setDescricao(String descricao){
        this.descricao = descricao;
    }

    public boolean getConcluido(){
        return this.concluido;
    }

    public void setConcluido(boolean concluido){
        this.concluido = concluido;
    }
}
