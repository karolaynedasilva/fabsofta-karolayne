package br.univille.view;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import br.univille.controller.ControllerPessoa;

import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.util.concurrent.Flow;

public class FormPessoa extends JFrame{
    
    private JLabel lblId, lblNome, lblEndereco;
    private JTextField txtId, txtNome, txtEndereco;
    private JButton btnSalvar, btnSair;

    public FormPessoa(){
        setSize(500,500);
        setTitle("Minha janelinha");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        painelCampos();
        painelBotoes();

        setVisible(true);
    }
    private void painelCampos(){
        JPanel painel = new JPanel();
        painel.setLayout(new GridLayout(3,2));
        
        lblId = new JLabel("ID");
        painel.add(lblId);
        txtId = new JTextField(5);
        painel.add(txtId);

        // cria o label <label> NOme <label>
        lblNome = new JLabel("Nome");
        painel.add(lblNome);
        //<input type="text">
        txtNome = new JTextField(15);
        painel.add(txtNome);

        lblEndereco = new JLabel("Endereço");
        painel.add(lblEndereco);
        txtEndereco = new JTextField(15);
        painel.add(txtEndereco);

        getContentPane().add(painel, "North");

    }
    private void painelBotoes(){
        ControllerPessoa controller = new ControllerPessoa();

        JPanel painel = new JPanel();

        painel.setLayout(new FlowLayout(FlowLayout.CENTER));
        btnSalvar = new JButton("Salvar");
        painel.add(btnSalvar);
        //botão chama o controllador 
        btnSalvar.addActionListener(controller);
        btnSalvar.setName("btnSalvar");

        btnSair = new JButton("Sair");
        painel.add(btnSair);
        btnSair.addActionListener(controller);
        btnSair.setName("btnSair");

        getContentPane().add(painel, "South");
    }

    public static void main(String[] args) {
        new FormPessoa();
    }
}
