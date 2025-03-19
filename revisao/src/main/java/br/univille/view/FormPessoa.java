package br.univille.view;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class FormPessoa extends JFrame{
    
    public FormPessoa(){
        setSize(500,500);
        setTitle("Minha janelinha");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);

        var label = new JLabel("Eu nãoo acredito");
        getContentPane().add(label);
    }
    public static void main(String[] args) {
        new FormPessoa();
    }
}
